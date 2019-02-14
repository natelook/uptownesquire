import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import AttorneyList from '../components/AttorneyList';
import { Container } from '../components/styles/Tools';
import { DarkBlue, Blue } from '../components/styles/Colors';

const Background = styled.div`
  background-color: ${DarkBlue};
`;

const ContainerBackground = styled.div`
  background-color: #fff;
  padding: 0 80px 100px;

  @media (max-width: 1024px) {
    padding: 0 0 100px;
  }

  h1 {
    padding: 50px 0;
    margin: 0;
    color: ${Blue};

    @media (max-width: 1024px) {
      padding-left: 30px;
    }
  }
`;

class Attorneys extends Component {
  render() {
    return (
      <Layout page={this.props.page}>
        <Background style={{ paddingTop: '87.328px' }}>
          <Container>
            <ContainerBackground>
              <h1>Attorneys & Staff</h1>
              <AttorneyList />
            </ContainerBackground>
          </Container>
        </Background>
      </Layout>
    );
  }
}

export default Attorneys;
