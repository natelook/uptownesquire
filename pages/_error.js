import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Container } from '../components/styles/Tools';

const Background = styled.div`
  background-color: ${props => props.theme.darkBlue};
`;

const ContainerBackground = styled.div`
  background-color: #fff;
  padding: 20px 40px;

  h1 {
    color: ${props => props.theme.blue};
  }

  p {
    font-size: 22px;

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 30px;
    }
  }

  li {
    font-size: 22px;
    margin-bottom: 5px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  @media (max-width: 414px) {
    grid-template-columns: 100%;
  }
`;

class Error extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <Background style={{ paddingTop: '75.328px' }}>
        <ContainerBackground>
          <Container>
            <h1>{this.props.statusCode}</h1>
            <p>
              Hey, this isn't a page.{' '}
              <Link href="/">
                <a>Home</a>
              </Link>
            </p>
          </Container>
        </ContainerBackground>
      </Background>
    );
  }
}

export default Error;
