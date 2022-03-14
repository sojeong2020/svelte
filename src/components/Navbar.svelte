<script lang="ts">
    import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
     
    } from 'sveltestrap';

    import { createEventDispatcher } from "svelte";

    import { _ } from "svelte-i18n";
  
    let isOpen = false;

    export let value;
    const dispatch = createEventDispatcher();
  
    function handleUpdate(event) {
      isOpen = event.detail.isOpen;
    }

    function handleLocaleChange(event) {
      event.preventDefault();
      dispatch("locale-changed", event.target.value);
  }
  </script>
  
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">{$_("nav.logo")}</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ms-auto" navbar>
       
        <NavItem>
          <NavLink href="https://teamkinetic.co.uk/about-teamkinetic">{$_("nav.about")}</NavLink>
        </NavItem>
        <select value={value} on:change={handleLocaleChange}>
          <option value="en">{$_("nav.english")}</option>
          <option value="we">{$_("nav.welsh")}</option>
        </select>
      </Nav>
    </Collapse>
  </Navbar>