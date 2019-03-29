import React, { Component } from 'react';
import styled from 'styled-components';
import AttorneyList from '../components/AttorneyList';
import { Container } from '../components/styles/Tools';

const Background = styled.div`
  background-color: ${props => props.theme.darkBlue};
`;

const ContainerBackground = styled.div`
  background-color: #fff;
  padding: 0 20px 100px;

  @media (max-width: 1024px) {
    padding: 0 0 100px;
  }

  h1 {
    padding: 50px 20px;
    margin: 0;
    color: ${props => props.theme.blue};

    @media (max-width: 1024px) {
      padding-left: 30px;
    }
  }
`;

class Attorneys extends Component {
  render() {
    return (
      <Background style={{ paddingTop: '75.328px' }}>
        <Container attorneyPage={true}>
          <ContainerBackground>
            <h1>Attorneys & Staff</h1>
            <AttorneyList />
          </ContainerBackground>
        </Container>
      </Background>
    );
  }
}

export default Attorneys;
