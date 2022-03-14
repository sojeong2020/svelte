<script lang="ts">
import { Alert } from 'sveltestrap';


import { _ } from "svelte-i18n";
</script>

<div class="alert">
<Alert color="warning">
    <h4 class="alert-heading text-capitalize">{$_("home.title")}</h4>
   <p>{$_("home.subtitle")}</p>
    <a href="https://training10.teamkinetic.co.uk/vk/admin/" class="alert-link">
        {$_("home.link")}
    </a>
    
  </Alert>
</div>

<style>
    .alert {
        text-align: center;
    }
</style>