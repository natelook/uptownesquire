import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import { Container } from '../components/styles/Tools';
import { Config } from '../config';

const Background = styled.div`
  background-color: ${props => props.theme.darkBlue};
`;

const ContainerBackground = styled.div`
  background-color: #fff;
  padding: 20px 40px;
  display: grid;
  grid-template-columns: 40% 60%;

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

const Images = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 3;

  @media (max-width: 414px) {
    display: block;
  }

  img {
    width: 150px;
    margin: 0 20px;

    @media (max-width: 768px) {
      width: 100px;
    }
  }
`;

const ImageContainer = styled.div`
  text-align: center;
  padding-top: 20px;

  p {
    margin: 5px 0;
  }

  a {
    color: ${props => props.theme.blue};
    text-decoration: none;
  }
`;

const AttorneyDescription = styled.div`
  @media (max-width: 414px) {
    grid-column-start: 1;
  }
`;

const AttorneyImage = styled.div`
  margin-top: 30px;
  display: block;
  height: 350px;
  width: 300px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  border: 2px solid ${props => props.theme.dark};
  border-radius: 10px;
  @media (max-width: 768px) {
    height: 400px;
    width: 200px;
  }

  @media (max-width: 414px) {
    width: 300px;
  }
`;

const stateBar = '/static/images/state-bar-of-texas.png';
const dbs = '/static/images/dbs.png';
const lgbtChamber = '/static/images/lgbtchamber.png';
const superLawyer = '/static/images/superlawyers-1.png';
const tarrant = '/static/images/tarrant.png';
const vertLogo = '/static/images/vertLogo.svg';

class Attorney extends Component {
  static async getInitialProps(context) {
    const { slug } = context.query;
    const res = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/attorneys?slug=${slug}`,
    );
    const attorneyProps = await res.json();
    return { attorneyProps };
  }

  render() {
    const { attorneyProps } = this.props;
    return (
      <Background style={{ paddingTop: '75.328px' }}>
        <Container>
          <ContainerBackground>
            <ImageContainer>
              <AttorneyImage
                image={
                  attorneyProps[0].featured_media
                    ? attorneyProps[0].better_featured_image.media_details.sizes
                        .medium_large.source_url
                    : vertLogo
                }
              />
              <p>Contact {attorneyProps[0].title.rendered.split(' ')[0]}</p>
              <p>
                <a
                  href={`mailto:${
                    attorneyProps[0].title.rendered.split(' ')[0]
                  }@uptownesquire.com`}>
                  {attorneyProps[0].title.rendered.split(' ')[0]}
                  @uptownesquire.com
                </a>
              </p>
            </ImageContainer>
            <AttorneyDescription>
              <h1>{attorneyProps[0].title.rendered}</h1>
              <div
                className="attorney-text"
                dangerouslySetInnerHTML={{
                  __html: attorneyProps[0].content.rendered,
                }}
              />
            </AttorneyDescription>
            {attorneyProps[0].slug === 'jaime-s-duggan' ? (
              <Images>
                <img src={dbs} />
                <img src={stateBar} />
                <img src={lgbtChamber} />
                <img src={superLawyer} />
                <img src={tarrant} />
              </Images>
            ) : null}
          </ContainerBackground>
        </Container>
      </Background>
    );
  }
}

export default Attorney;
