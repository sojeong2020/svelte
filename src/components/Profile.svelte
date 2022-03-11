<script lang="ts">
    import {Form, FormGroup, Input, Label, Button,Container,Row,Col } from 'sveltestrap';
  </script>
  
  <Container>
  <Form class="profile-form">
      <h4>Personal details</h4>
    <Row>
     <Col  xs={12} md={6}>
    <FormGroup>
        <Label for="firstname">Surname</Label>
        <Input
          type="text"
          name="firstname"
          placeholder="First name"
          required
        />
      </FormGroup>
    </Col>

    <Col  xs={12} md={6}>
  <FormGroup>
    <Label for="surname">Surname</Label>
    <Input
      type="text"
      name="surname"
      placeholder="Surname"
      required
    />
  </FormGroup>
</Col>
</Row>

<Row>
    <Col  xs={12} md={6}>
  <FormGroup>
    <Label for="mobile">Your mobile number</Label>
    <Input
      type="text"
      name="mobilr"
      placeholder="mobile number"
      required
    />
  </FormGroup>
</Col>

<Col  xs={12} md={6}>
  <FormGroup>
    <Label for="email">Your email address</Label>
    <Input
      type="email"
      name="email"
      placeholder="email address"
      required
    />
  </FormGroup>
</Col>
</Row>

<Row>
    <Col  xs={12} md={6}>
<FormGroup>
    <Label for="date">Your date of birth</Label>
    <Input
      type="date"
      name="date"
      required
    />
  </FormGroup>
</Col>

<Col  xs={12} md={6}>
  <FormGroup>
    <Label for="gender">Identify your gender as</Label>
    <Input 
    type="select" 
    name="gender"
    required
    >
      <option>Female</option>
      <option>Male</option>
    </Input>
  </FormGroup>
</Col>
</Row>

  <Button color="success">Submit</Button>
</Form>
</Container>

<style>
   
</style>