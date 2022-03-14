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
    import { _ } from "svelte-i18n";

  </script>
  <Container>
      <Row>
          <Col xs={12} md={6}>
  <Card class="mb-3 mt-4">
    <CardHeader >
        
      <CardTitle >{$_("roles.cardFirst.title")}</CardTitle>
    
    </CardHeader>
    <CardBody>
      <CardSubtitle>{$_("roles.cardFirst.p1")}</CardSubtitle>

      <CardText>
        {$_("roles.cardFirst.p2")}
      </CardText>

      <CardText>
        {$_("roles.cardFirst.p3")}
      </CardText>

       <CardText>
        {$_("roles.cardFirst.p4")}
       </CardText>
     
      <a href="/">{$_("roles.cardFirst.more")}</a>
      <a href="/">{$_("roles.cardFirst.link")}</a>
    </CardBody>
  </Card>
</Col>

  <Col xs={12} md={6}>
  <Card class="mb-3 mt-4" >
    <CardHeader>
        
      <CardTitle >{$_("roles.cardSecond.title")}</CardTitle>
    
    </CardHeader>
    <CardBody>
      <CardSubtitle>{$_("roles.cardSecond.p1")}</CardSubtitle>

      <CardText>
        {$_("roles.cardSecond.p2")}
      </CardText>

      <CardText>
        {$_("roles.cardSecond.p3")}
      </CardText>

       <CardText>
        {$_("roles.cardSecond.p4")}
       </CardText>
     
      <a href="/">{$_("roles.cardSecond.more")}</a>
      <a href="/">{$_("roles.cardSecond.link")}</a>
    </CardBody>
  </Card>
</Col>

</Row>
</Container>


