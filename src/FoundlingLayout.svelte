<script>
  import { 
    Button,
    Col,
    Container,
    Row, 
  } from 'sveltestrap';

  import {
    passPhrase,
  } from './stores.js';

  import MainSection from './MainSection.svelte';


</script>


<Container fluid>
  <Row>
    <Col>
      <Button color="primary" on:click={() => $passPhrase = "Foundling Home"}>
        Home
      </Button>
    </Col>
    <Col>
      <Button color="primary" on:click={() => $passPhrase = "Foundling Help"}>
        Help
      </Button>
    </Col>
    <Col>
      <Button color="primary" on:click={() => $passPhrase = "Foundling Login"}>
        Login
      </Button>
    </Col>
  </Row>
  <Row>
    <Col >
      <MainSection />
    </Col>
  </Row>
  <Row>
    <Col>
      <Button color="primary" on:click={() => $passPhrase = "Foundling About"}>
        About
      </Button>
    </Col>
    <Col>
      <Button color="primary" on:click={() => $passPhrase = "Foundling Contact"}>
        Contact
      </Button>
    </Col>
    <Col>
      <Button color="primary" on:click={() => $passPhrase = "Foundling News"}>
        News
      </Button>
    </Col>
  </Row>
</Container>
