import React, { Component } from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import AttorneyBox from './AttorneyBox';
import { Config } from '../config';

const vertLogo = '/static/images/vertLogo.svg';

const List = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  padding: 0 25px;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 0;
  }

  @media (max-width: 414px) {
    grid-template-columns: 100%;
    grid-gap: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class AttorneyList extends Component {
  state = {
    attorneys: [],
  };

  async componentWillMount() {
    const res = await fetch(`${Config.apiUrl}/wp-json/wp/v2/attorneys`);
    const attorneys = await res.json();
    this.setState({
      attorneys,
    });
  }
  render() {
    const { attorneys } = this.state;
    return (
      <List>
        {attorneys.reverse().map(attorney => (
          <Link
            as={`/attorney/${attorney.slug}`}
            href={`/attorney?slug=${attorney.slug}&apiRoute=attorneys`}
            key={attorney.id}>
            <a>
              <AttorneyBox
                name={attorney.title.rendered}
                image={
                  attorney.featured_media != 0
                    ? attorney.better_featured_image.media_details.sizes.large
                        .source_url
                    : vertLogo
                }
              />
            </a>
          </Link>
        ))}
      </List>
    );
  }
}

export default AttorneyList;
