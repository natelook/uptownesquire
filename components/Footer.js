import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Container } from './styles/Tools';

const FooterContainer = styled.div`
  background-color: ${props => props.theme.dark};
  color: #999;
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  padding-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 50% 50%;
  }

  @media (max-width: 414px) {
    grid-template-columns: 100%;

    text-align: center;
  }
`;

const List = styled.div`
  font-size: 20px;

  @media (max-width: 414px) {
    font-size: 14px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    color: #777;
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.medBlue};
    }
  }

  h3 {
    margin: 0 0 20px 0;

    @media (max-width: 414px) {
      font-size: 15px;
    }
  }

  li {
    margin-bottom: 15px;
  }
`;

const ListyList = styled.div``;

const BottomGrid = styled.div`
  display: flex;
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 5;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

const Bold = styled.span`
  font-weight: 500;
`;

class Footer extends Component {
  // state = {
  //   attorneys: [],
  // };
  // async componentWillMount() {
  //   const attorneysRes = await fetch(
  //     `${Config.apiUrl}/wp-json/wp/v2/attorneys`,
  //   );
  //   const attorneys = await attorneysRes.json();
  //   this.setState({
  //     attorneys,
  //   });
  // }

  render() {
    return (
      <FooterContainer>
        <Container>
          <Grid>
            <List>
              <div>
                <h3>Sitemap</h3>
                <ListyList>
                  <ul>
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/disclaimer">
                        <a>Disclaimer</a>
                      </Link>
                    </li>
                    <li>
                      <a href="https://secure.lawpay.com/pages/dnlawpc/operating">
                        Make a Payment
                      </a>
                    </li>
                  </ul>
                </ListyList>
              </div>
            </List>
            <List>
              <div>
                <h3>Attorneys & Staff</h3>
                <ListyList>
                  <ul>
                    <li>
                      <Link
                        as="/attorneys/jaime-s-duggan"
                        href="/attorney?slug=jaime-s-duggan">
                        <a>Jaime S. Duggan</a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        as="/attorneys/kourtney-l-parker"
                        href="/attorney?slug=kourtney-l-parker">
                        <a>Kourtney L. Parker</a>
                      </Link>
                    </li>

                    <li>
                      <Link
                        as="/attorneys/olivia-lindsey"
                        href="/attorney?slug=olivia-lindsey">
                        <a>Olivia Lindsey</a>
                      </Link>
                    </li>
                  </ul>
                </ListyList>
              </div>
            </List>
            <List>
              <div>
                <h3>Practices</h3>
                <ListyList>
                  <ul>
                    <li>
                      <Link href="/family-law">
                        <a>Family Law</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="lgbtq-law">
                        <a>LGBTQ Law</a>
                      </Link>
                    </li>
                  </ul>
                </ListyList>
              </div>
            </List>
            <List>
              <div>
                <h3>Get in touch</h3>
                <ListyList>
                  <ul>
                    <li>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <a>Blog</a>
                      </Link>
                    </li>
                  </ul>
                </ListyList>
              </div>
            </List>
          </Grid>
          <Grid>
            <BottomGrid>
              <List>
                <ul>
                  <li>
                    3626 N. Hall Street, Ste 820
                    <br /> Dallas, Texas 75219
                  </li>
                  <li>
                    <Bold>Phone: </Bold>214-494-1647
                  </li>
                  <li>
                    <Bold>Fax: </Bold>214-731-7068
                  </li>
                  <li>
                    <Bold>Email: </Bold>
                    <a href="mailto:info@uptownesquire.com">
                      info@uptownesquire.com
                    </a>
                  </li>
                </ul>
              </List>
            </BottomGrid>
            <BottomGrid>&copy; 2019 Duggan Law Firm P.C.</BottomGrid>
          </Grid>
        </Container>
      </FooterContainer>
    );
  }
}

export default Footer;
