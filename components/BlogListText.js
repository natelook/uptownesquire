import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import Link from 'next/link';
import { Config } from '../config';
import { Blue } from '../components/styles/Colors';

const List = styled.div`
  font-size: 17px;

  ul {
  }

  a {
    color: ${Blue};
    text-decoration: none;
  }

  li {
    margin-bottom: 7px;
  }
`;

class BlogListText extends Component {
  state = {
    blogList: [],
  };

  async componentWillMount() {
    const res = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts`);
    const blogList = await res.json();
    this.setState({
      blogList,
    });
  }
  render() {
    const { blogList } = this.state;
    return (
      <List>
        <ul>
          {blogList.map(post => (
            <li key={post.id}>
              <Link
                as={`/post/${post.slug}`}
                href={`/post?slug=${post.slug}?apiRoute=post`}>
                <a>{post.title.rendered}</a>
              </Link>
            </li>
          ))}
        </ul>
      </List>
    );
  }
}

export default BlogListText;
