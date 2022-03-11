<script lang="ts">
    import {Form, FormGroup, Input, Label, Button,Container,Row,Col } from 'sveltestrap';

    let firstname;
    let surname;
    let mobile;
    let email;
    let date;
    let gender;

   
    const handleSubmit =(e)=>{
     e.preventDefault()
      const profile = {firstname,surname,mobile,email,date,gender}
        console.log(profile)

    }
  </script>
  
  <Container>
  <Form class="profile-form" on:submit={handleSubmit}>
      <h4>Personal details</h4>
    <Row>
    <Col  xs={12} md={6}>
    <FormGroup>
        <Label for="firstname">firstname {firstname}</Label>
        <Input
          type="text"
          name="firstname"
          placeholder="First name"
          required
          bind:value={firstname}
        />
    </FormGroup>
    </Col>

    <Col  xs={12} md={6}>
    <FormGroup>
    <Label for="surname">Surname </Label>
    <Input
      type="text"
      name="surname"
      placeholder="Surname"
      required
      bind:value={surname}
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
      bind:value={mobile}
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
      bind:value={email}
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
      bind:value={date}
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
    bind:value={gender}
    >
      <option>Female</option>
      <option>Male</option>
    </Input>
    </FormGroup>
    </Col>
    </Row>

  <Button color="success">Submit</Button>

</Form>
<span>{firstname}</span><span>{surname}</span>
<span>{mobile}</span><span>{email}</span>
<span>{date}</span><span>{gender}</span>


</Container>

<style>
   
</style>