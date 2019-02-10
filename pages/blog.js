import React, { Component } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import BlogList from '../components/BlogList';
import { Container } from '../components/styles/Tools';
import { DarkBlue } from '../components/styles/Colors';

const Background = styled.div`
  background-color: ${DarkBlue};
`;

const BackgroundContainer = styled.div`
  background-color: #fff;
  padding: 20px 40px;
  display: grid;
`;

class Blog extends Component {
  render() {
    return (
      <Layout>
        <Background style={{ paddingTop: '87.328px' }}>
          <Container>
            <BackgroundContainer>
              <BlogList />
            </BackgroundContainer>
          </Container>
        </Background>
      </Layout>
    );
  }
}

export default Blog;
