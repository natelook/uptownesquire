import React, { Component } from 'react';
import styled from 'styled-components';
import BlogList from '../components/BlogList';
import { Container } from '../components/styles/Tools';

const Background = styled.div`
  background-color: ${props => props.theme.darkBlue};
`;

const BackgroundContainer = styled.div`
  background-color: #fff;
  padding: 20px 40px;
  display: grid;
`;

class Blog extends Component {
  render() {
    return (
      <Background style={{ paddingTop: '75.328px' }}>
        <Container>
          <BackgroundContainer>
            <BlogList />
          </BackgroundContainer>
        </Container>
      </Background>
    );
  }
}

export default Blog;
