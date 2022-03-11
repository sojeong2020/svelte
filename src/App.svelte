<script>
	import Router from 'svelte-spa-router';
	import {link } from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';

  import {Button} from 'sveltestrap';

	import Sidebar from './components/Sidebar.svelte';
  import Navbar from './components/Navbar.svelte';
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

<Navbar>
  <div slot="lang">
    <Button>English</Button>
    <Button>Welsh</Button>
  </div>
</Navbar>
<Sidebar>

	<span slot="sidebar">
		<div class="sidebar">
	  <a href="/" class="active" use:link use:active>Home</a>
	  <a href="/profile" class="active" use:link use:active>Profile</a>
      <a href="/opps"  class="active" use:link use:active>Opportunities</a>
	  <a href="/roles" class="active" use:link use:active>Roles</a>
	  <a href="/events" class="active" use:link use:active>Events</a>
	  <a href="/Calendar" class="active" use:link use:active>Calendar</a>
	    </div>
    </span>
	<span slot="content">
		<div class="content">
	  <Router {routes}/>
	    </div>
	</span>

</Sidebar>
 


<Footer />

<style>

.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #0f0753;
  height: 100%;
  overflow: auto;
  position: fixed;
}


/* Sidebar links */
.sidebar a {
  display: block;
  color: white;
  padding: 16px;
  text-decoration: none;
}
/* Active/current link */
.sidebar a.active {
  background-color: #02442c;
  color: white;
}
/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
 
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}
/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
 



</style>