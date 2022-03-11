<script lang="ts">
    import {Form, FormGroup, Input, Label, Button,Container,Row,Col } from 'sveltestrap';

   
    let profile = {firstname:'',surname:'',mobile:'', email:'', date:'', gender:'' }

    let errors = {firstname:'',surname:'',mobile:'', email:''}

    let valid = false;

   
    const handleSubmit =(e)=>{
     e.preventDefault()

      valid = true;

      //validation question- firstname
      if(!profile.firstname.match(/^[A-Za-z]{2,16}$/)) {
          valid = false;
          errors.firstname = 'Firstname should be 2-16 characters and should not include any special character!'
        }else {
            errors.firstname = '';
        }

    //validation question- surname
    if(!profile.surname.match(/^[A-Za-z]{2,16}$/)) {
          valid = false;
          errors.surname = 'Surname should be 2-16 characters and should not include any special character!'
        }else {
            errors.surname = '';
        }

    //validation question- mobile number
    if(!profile.mobile.match(/^((\\+91-?)|0)?[0-9]{10}$/)) {
          valid = false;
          errors.mobile = 'It should be a valid mobile number:('
        }else {
            errors.mobile = '';
        }
    
    //validation question- email address
    if(!profile.email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
          valid = false;
          errors.email = 'It should be a valid email address :('
        }else {
            errors.email = '';
        }

    //add new profile
    if(valid){
        console.log(profile,'new profile')
    }

      }
  </script>
  
  <Container>
  <Form class="profile-form" on:submit={handleSubmit}>
      <h4>Personal details</h4>
    <Row>
    <Col  xs={12} md={6}>
    <FormGroup>
        <Label for="firstname">firstname</Label>
        <Input
          type="text"
          name="firstname"
          placeholder="First name"
          bind:value={profile.firstname}
        />
        <div class="error">{errors.firstname}</div>
    </FormGroup>
    </Col>

    <Col  xs={12} md={6}>
    <FormGroup>
    <Label for="surname">Surname </Label>
    <Input
      type="text"
      name="surname"
      placeholder="Surname"
      bind:value={profile.surname}
    />
    <div class="error">{errors.surname}</div>

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
      bind:value={profile.mobile}
    />
    <div class="error">{errors.mobile}</div>

    </FormGroup>
    </Col>

    <Col  xs={12} md={6}>
    <FormGroup>
    <Label for="email">Your email address</Label>
    <Input
      type="email"
      name="email"
      placeholder="email address"
      bind:value={profile.email}
    />
    <div class="error">{errors.email}</div>

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
      bind:value={profile.date}
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
    bind:value={profile.gender}
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