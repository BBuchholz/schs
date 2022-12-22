<script>
  import { 
    // Button,
    Col,
    Container,
    Row,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle, 
  } from 'sveltestrap';

  import {
    passPhrase,
  } from './stores.js';

  import SectionHeader from './SectionHeader.svelte';

</script>


<Container fluid>
  <Row>
    <Col>
      <SectionHeader title="News" />
    </Col>
  </Row>
  <Row>
    <Col>


      <Card class="mb-3">
        <CardHeader>
          <CardTitle>A Short ChatGPT Blog Article</CardTitle>
        </CardHeader>
        <CardBody>
          <CardSubtitle>Blog Article</CardSubtitle>
          <CardText>
            Currently working on "A Short ChatGPT Blog Article", view the <a href="https://docs.google.com/document/d/e/2PACX-1vStvyPPHL_HPE7D3f6RB_m6r0gNf3RIVLq5XajPu7qtrXA3OfDVl-3Oxxoz4QN1OnZB-Rxst0Rr1oMY/pub">draft here</a>
          </CardText>
        </CardBody>
        <CardFooter>Status: In Progress</CardFooter>
      </Card>

    </Col>
  </Row>
  <Row>
    <Col>

      <Card class="mb-3">
        <CardHeader>
          <CardTitle>Socratic Circle Code Port</CardTitle>
        </CardHeader>
        <CardBody>
          <CardSubtitle>Code Project</CardSubtitle>
          <CardText>
            Currently working on porting the code from amateur hour (this site) into a sister project called "socratic-circle", view the <a href="https://docs.google.com/document/d/e/2PACX-1vRz55BvaQgnT15c4Jq1Ho3wTNcitgdlWJDB6-YzuejHI7TXZ8XIC5DTThqLopj6Pv_ixU6l0eWypnIx/pub">planning docs here</a>
          </CardText>
        </CardBody>
        <CardFooter>Status: In Progress</CardFooter>
      </Card>

    </Col>
  </Row>
</Container>
