import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Layout from '../components/Layout';
import { Container } from '../components/styles/Tools';
import { DarkBlue, Blue } from '../components/styles/Colors';
import Button from '../components/Button';
import isEmpty from '../components/isEmpty';
import Validator from 'validator';
import { throws } from 'assert';

const Background = styled.div`
  background-color: ${DarkBlue};
`;

const ContainerBackground = styled.div`
  padding: 20px 40px;
  background-color: #fff;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  grid-gap: 10px;
  padding-right: 20px;
`;

const FormContainer = styled.div`
  padding: 10px;
`;

const FormInput = styled.div`
  margin-bottom: 20px;

  &:nth-child(5) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  &:last-child {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  label {
    display: block;
  }

  input {
    display: block;
    width: 100%;
    height: 30px;
    font-size: 20px;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 20px 10px;
    border: 2px solid ${Blue};
  }

  textarea {
    display: block;
    width: 100%;
    font-size: 20px;
    height: 100px;
    border-radius: 5px;
    border: 2px solid ${Blue};
    box-sizing: border-box;
    padding: 10px 10px;
    resize: none;
  }

  button {
    margin: 0 auto;
  }
`;

const OtherContactInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  ul {
    list-style: none;
  }

  li {
    margin-bottom: 30px;
  }

  a {
    color: ${Blue};
  }
`;

const Bold = styled.span`
  font-weight: 500;
`;

const validationErrors = {};

class Contact extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    errors: {},
  };

  handleSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, email, phone, message, errors } = this.state;

    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message,
    };

    axios
      .post('/contact/submit', formData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { firstName, lastName, email, phone, message, errors } = this.state;
    console.log(validationErrors);
    // console.log(errors);
    return (
      <Background style={{ paddingTop: '75.328px' }}>
        <Container>
          <ContainerBackground>
            <Grid>
              <div>
                <h1>Contact</h1>
                <FormContainer>
                  <form onSubmit={this.handleSubmit}>
                    <FormInput>
                      <label>
                        First Name
                        <input
                          name="firstName"
                          onChange={this.handleChange}
                          value={firstName}
                          placeholder="First Name..."
                          style={{ borderColor: null }}
                        />
                      </label>
                    </FormInput>
                    <FormInput>
                      <label>
                        Last Name
                        <input
                          name="lastName"
                          onChange={this.handleChange}
                          value={lastName}
                          placeholder="Last Name..."
                        />
                      </label>
                    </FormInput>
                    <FormInput>
                      <label>
                        Email
                        <input
                          name="email"
                          onChange={this.handleChange}
                          value={email}
                          placeholder="Email..."
                        />
                      </label>
                    </FormInput>
                    <FormInput>
                      <label>
                        Phone Number
                        <input
                          name="phone"
                          onChange={this.handleChange}
                          value={phone}
                          placeholder="Phone Number..."
                        />
                      </label>
                    </FormInput>
                    <FormInput>
                      <label>
                        Message
                        <textarea
                          name="message"
                          onChange={this.handleChange}
                          value={message}
                          placeholder="Write a brief message regarding your legal concern..."
                        />
                      </label>
                    </FormInput>
                    <FormInput>
                      <Button>Submit</Button>
                    </FormInput>
                  </form>
                </FormContainer>
              </div>
              <OtherContactInfo>
                <ul>
                  <li>
                    3626 N. Hall Street, Ste 820
                    <br /> Dallas, Texas 75219
                  </li>
                  <li>
                    <Bold>Phone: </Bold>
                    <a href="tel:21449491647">214-494-1647</a>
                  </li>
                  <li>
                    <Bold>Fax: </Bold>214-731-7068
                  </li>
                  <li>
                    <Bold>Email: </Bold>
                    <a href="mailto:info@uptownesquire.com">
                      info@uptownesquire.com
                    </a>
                  </li>
                </ul>
              </OtherContactInfo>
            </Grid>
          </ContainerBackground>
        </Container>
      </Background>
    );
  }
}

export default Contact;
