import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Spring } from 'react-spring';
import LoadingRing from '../components/LoadingRing';
import { Config } from '../config';

const logo = '/static/images/logo.png';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  h3 {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

const BlogContent = styled.div`
  margin-left: 20px;
`;

const BlogImage = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
`;

const BlogTitle = styled.div``;

class Blog extends Component {
  state = {
    blog: [],
    loading: true,
  };

  async componentWillMount() {
    const res = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts`);
    const blog = await res.json();
    this.setState({
      blog,
      loading: false,
    });
  }

  render() {
    const { blog, loading } = this.state;
    return (
      <div>
        {loading ? (
          <LoadingRing />
        ) : (
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ duration: 500 }}>
            {props => (
              <div style={props}>
                <h1>Blog Posts</h1>
                {blog.map(post => (
                  <Grid key={post.id}>
                    <h3>{post.title.rendered}</h3>
                    <BlogImage
                      image={
                        post.better_featured_image
                          ? post.better_featured_image.media_details.sizes
                              .medium_large.source_url
                          : logo
                      }
                    />
                    <BlogContent>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.content.rendered.split('</p>')[0],
                        }}
                      />
                      <div style={{ textAlign: 'center' }}>
                        <Link
                          key={post.id}
                          as={`/post/${post.slug}`}
                          href={`/post?slug=${post.slug}&apiRoute=post`}>
                          <a>Read more</a>
                        </Link>
                      </div>
                    </BlogContent>
                  </Grid>
                ))}
              </div>
            )}
          </Spring>
        )}
      </div>
    );
  }
}

export default Blog;
