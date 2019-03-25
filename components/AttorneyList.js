import React, { Component } from "react";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import AttorneyBox from "./AttorneyBox";
import { Config } from "../config";
import LoadingRing from "./LoadingRing";

const vertLogo = "/static/images/vertLogo.svg";

const List = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 0;
  }

  @media (max-width: 414px) {
    grid-template-columns: 100%;
    grid-gap: 10px;
  }
`;

class AttorneyList extends Component {
  state = {
    attorneys: [],
    loading: true,
  };

  async componentWillMount() {
    const res = await fetch(`${Config.apiUrl}/wp-json/wp/v2/attorneys`);
    const attorneys = await res.json();
    this.setState({
      attorneys,
      loading: false,
    });
  }
  render() {
    const { attorneys, loading } = this.state;
    return (
      <div>
        {loading ? (
          <LoadingRing />
        ) : (
          <List>
            {attorneys.reverse().map(attorney => (
              <Link
                as={`/attorney/${attorney.slug}`}
                href={`/attorney?slug=${attorney.slug}&apiRoute=attorneys`}
                key={attorney.id}
              >
                <a>
                  <AttorneyBox
                    name={attorney.title.rendered}
                    image={
                      attorney.featured_media
                        ? attorney.acf.attorney_image.url
                        : vertLogo
                    }
                  />
                </a>
              </Link>
            ))}
          </List>
        )}
      </div>
    );
  }
}

export default AttorneyList;
