import { get, derived, writable } from "svelte/store";
import {
  addMessages,
  locale,
  init,
  dictionary,
  _,
} from "svelte-i18n";

let _activeLocale;
// Internal store for tracking network
// loading state
const isDownloading = writable(false);

const MESSAGE_FILE_URL_TEMPLATE = "/lang/{locale}.json";

function setupI18n(options) {

  const { withLocale: locale_ } = options;

  // Initialize svelte-i18n
  init({ initialLocale: locale_ });

  // Don't re-download translation files
  if (!hasLoadedLocale(locale_)) {
    isDownloading.set(true);
    const messagesFileUrl = 
      MESSAGE_FILE_URL_TEMPLATE.replace(
        "{locale}",
        locale_,
      );
    // Download translation file for given locale/language
    return loadJson(messagesFileUrl).then((messages) => {
      // Configure svelte-i18n to use the locale

      _activeLocale = locale_;
      addMessages(locale_, messages);
      locale.set(locale_);
      isDownloading.set(false);

     });
  }
}

const isLocaleLoaded = derived(
    [isDownloading, dictionary],
    ([$isDownloading, $dictionary]) =>
      !$isDownloading &&
      $dictionary[_activeLocale] &&
      Object.keys($dictionary[_activeLocale]).length > 0,
  );

function loadJson(url) {
  return fetch(url).then((response) => response.json());
}

function hasLoadedLocale(locale) {
  // If the svelte-i18n dictionary has an entry for the
  // locale, then the locale has already been added
  return get(dictionary)[locale];
}

// We expose the svelte-i18n _ store so that our app has
// a single API for i18n

export { _, setupI18n, isLocaleLoaded,locale };