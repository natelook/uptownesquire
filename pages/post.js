import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import { Config } from '../config';
import Layout from '../components/Layout';
import BlogListText from '../components/BlogListText';
import { Container } from '../components/styles/Tools';
import { DarkBlue, Blue } from '../components/styles/Colors';

const Background = styled.div`
  background-color: ${DarkBlue};
  a {
    color: ${Blue};
  }
`;

const ContainerBackground = styled.div`
  background-color: #fff;
  padding: 20px 40px;
  display: grid;
  grid-template-columns: 65% 35%;
  grid-gap: 20px;
  position: relative;

  @media (max-width: 414px) {
    grid-template-columns: 100%;
  }
`;

const SideBar = styled.div`
  display: flex;
  align-items: center;
`;

class Post extends Component {
  static async getInitialProps(context) {
    const { slug } = context.query;
    const res = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/posts?slug=${slug}`,
    );
    const postProps = await res.json();
    return { postProps };
  }
  render() {
    const { postProps } = this.props;
    return (
      <Layout>
        <Background style={{ paddingTop: '87.328px' }}>
          <Container>
            <ContainerBackground>
              <div>
                <h2>{postProps[0].title.rendered}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: postProps[0].content.rendered,
                  }}
                />
              </div>
              <SideBar>
                <div>
                  <h2>Read more</h2>
                  <BlogListText />
                </div>
              </SideBar>
            </ContainerBackground>
          </Container>
        </Background>
      </Layout>
    );
  }
}

export default Post;
