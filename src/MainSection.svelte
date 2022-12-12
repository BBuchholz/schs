<script>
  import { 
    // Button,
    Col,
    Container,
    Row, 
  } from 'sveltestrap';

  import {
    passPhrase,
  } from './stores.js';

  import HelpSection from './HelpSection.svelte';
  import LoginSection from './LoginSection.svelte';
  import AboutSection from './AboutSection.svelte';
  import ContactSection from './ContactSection.svelte';
  import NewsSection from './NewsSection.svelte';
  import HomeSection from './HomeSection.svelte';
 
</script>


<Container fluid>
  <Row>
    <Col >
      {#if $passPhrase === "Help"}
        <HelpSection />
      {:else if $passPhrase === "Login"}
        <LoginSection />
      {:else if $passPhrase === "About"}
        <AboutSection />
      {:else if $passPhrase === "Contact"}
        <ContactSection />
      {:else if $passPhrase === "News"}
        <NewsSection />
      {:else}
        <HomeSection />
      {/if}
    </Col>
  </Row>
</Container>
