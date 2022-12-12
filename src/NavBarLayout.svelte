<script>
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'sveltestrap';


  import {
    passPhrase,
  } from './stores.js';

  import MainSection from './MainSection.svelte';

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>

<Navbar color="light" light expand="md">
  <NavbarBrand href="/">Amateur Hour</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ms-auto" navbar>
      <NavItem>
        <NavLink href="?passPhrase=Home">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="?passPhrase=Help">Help</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="?passPhrase=Login">Login</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="?passPhrase=About">About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="?passPhrase=Contact">Contact</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="?passPhrase=News">News</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>

<MainSection />