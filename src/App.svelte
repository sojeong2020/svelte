<script>
	import Router from 'svelte-spa-router';
	import {link} from 'svelte-spa-router';
    import active from 'svelte-spa-router/active';

	import Sidebar from './components/Sidebar.svelte';
	import Home from './components/Home.svelte';
	import Profile from './components/Profile.svelte';
	import Opps from './components/Opps.svelte';
	import Roles from './components/Roles.svelte';
	import Events from './components/Events.svelte';
	import Calendar from './components/Calendar.svelte';
	import Footer from './components/Footer.svelte';

	 // routes
	 const routes = {
    
	'/profile':Profile,
    '/opps' : Opps,
	'/roles': Roles,
	'/events': Events,
	'/calendar': Calendar,
	'/': Home,

    };

</script>

<Sidebar>
	<span slot="sidebar">
	  <a href="/"  class="list-group-item list-group-item-action bg-light" use:link use:active>Home</a>
	  <a href="/profile" class="list-group-item list-group-item-action bg-light" use:link use:active>Profile</a>
      <a href="/opps" class="list-group-item list-group-item-action bg-light" use:link use:active>Opportunities</a>
	  <a href="/roles" class="list-group-item list-group-item-action bg-light" use:link use:active>Roles</a>
	  <a href="/events" class="list-group-item list-group-item-action bg-light" use:link use:active>Events</a>
	  <a href="/Calendar" class="list-group-item list-group-item-action bg-light" use:link use:active>Calendar</a>

	</span>
	<span slot="content">
	  <Router {routes}/>
	</span>
  </Sidebar>



<Footer />

<style>
	/* Style for "active" links; need to mark this :global because the router adds the class directly */
:global(.list-group-item.active) {
    font-weight: bold;
    color: black;
}
</style>