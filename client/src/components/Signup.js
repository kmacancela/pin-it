import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from 'reactstrap';

export default class Signup extends Component {
  state = {
    modal: false,
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    msg: null
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    console.log("Hits inside obSubmit of signup")
    e.preventDefault();

    const { first_name, last_name, email, password } = this.state;

    // Create user object
    let info = {
      first_name,
      last_name,
      email,
      password
    }

    // Attempt to register
    this.props.newUser(info)
    this.props.xprops.history.push('/')
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>

            {this.state.msg ? (
              <Alert color='danger'>{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='name'>First Name</Label>
                <Input
                  type='text'
                  name='first_name'
                  id='first_name'
                  placeholder='First Name'
                  className='mb-3'
                  onChange={this.onChange}
                />
              <br />
              <Label for='name'>Last Name</Label>
                <Input
                  type='text'
                  name='last_name'
                  id='last_name'
                  placeholder='Last Name'
                  className='mb-3'
                  onChange={this.onChange}
                />
              <br />
              <Label for='email'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  className='mb-3'
                  onChange={this.onChange}
                />
              <br />
              <Label for='password'>Password</Label>
                <Input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  className='mb-3'
                  onChange={this.onChange}
                />
                <br />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Register
                </Button>
              </FormGroup>
            </Form>
      </div>
    )
  }
}
