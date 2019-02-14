import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Config } from '../config';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;

  @media (max-width: 414px) {
    grid-template-columns: 100%;
  }
`;

const BlogItem = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

const BlogTitle = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 0;
  color: #fff;
  height: 100px;
  font-size: 18px;

  p {
    padding: 0 20px;
  }
`;

class Blog extends Component {
  state = {
    blog: [],
  };

  async componentWillMount() {
    const res = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts`);
    const blog = await res.json();
    this.setState({
      blog,
    });
  }

  render() {
    const { blog } = this.state;
    return (
      <Grid>
        {blog.map(post => (
          <Link
            key={post.id}
            as={`/post/${post.slug}`}
            href={`/post?slug=${post.slug}&apiRoute=post`}>
            <a>
              <BlogItem background="/static/images/family.jpeg">
                <BlogTitle>
                  <p>{post.title.rendered}</p>
                </BlogTitle>
              </BlogItem>
            </a>
          </Link>
        ))}
      </Grid>
    );
  }
}

export default Blog;
