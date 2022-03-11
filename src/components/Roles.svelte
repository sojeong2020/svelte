<script>
    import {
      Container,
      Row,
      Col,
      Card,
      CardBody,
      CardHeader,
      CardSubtitle,
      CardText,
      CardTitle
    } from 'sveltestrap';
  </script>
  <Container>
      <Row>
          <Col xs={12} md={6}>
  <Card class="mb-3">
    <CardHeader >
        
      <CardTitle >Basic Onboarding Roles</CardTitle>
    
    </CardHeader>
    <CardBody>
      <CardSubtitle>Current Status is APPROVED</CardSubtitle>

      <CardText>
       2 Completed tasks
      </CardText>

      <CardText>
       0 Started tasks
      </CardText>

       <CardText>
       2 Pending tasks
       </CardText>
     
      <a href="/">more details</a>
      <a href="/">link</a>
    </CardBody>
  </Card>
</Col>

  <Col xs={12} md={6}>
  <Card class="mb-3">
    <CardHeader>
        
      <CardTitle >Basic Onboarding Roles</CardTitle>
    
    </CardHeader>
    <CardBody>
      <CardSubtitle>Current Status is APPROVED</CardSubtitle>

      <CardText>
       2 Completed tasks
      </CardText>

      <CardText>
       0 Started tasks
      </CardText>

       <CardText>
       2 Pending tasks
       </CardText>
     
      <a href="/">more details</a>
      <a href="/">link</a>
    </CardBody>
  </Card>
</Col>

</Row>
</Container>


