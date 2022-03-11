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
  
    let isOpen = false;
  
    function handleUpdate(event) {
      isOpen = event.detail.isOpen;
    }
  </script>
  
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">Svelte App</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ms-auto" navbar>
       
        <NavItem>
          <NavLink href="https://teamkinetic.co.uk/about-teamkinetic">About us</NavLink>
        </NavItem>
        <slot name="lang"></slot>
      </Nav>
    </Collapse>
  </Navbar>