import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Spring } from 'react-spring';
import { Container } from '../components/styles/Tools';
import { LightBlue, Blue, MedBlue } from '../components/styles/Colors';
import Button from '../components/Button';

// Pics
const signing = '/static/images/header2.jpeg';
const family = '/static/images/family.jpeg';
const lgbtq = '/static/images/flag.jpg';
const dallas = '/static/images/dallas.jpg';
const hands = '/static/images/hands.jpeg';
const circleHands = '/static/images/circle_hands.jpg';
const redHeart = '/static/images/red_heart.jpg';
const scalesJustice = 'static/images/scales_justice.jpg';
const balloons = '/static/images/balloons.jpg';

// Lighter Pics
const redHeartLighter = '/static/images/red_heart_lighter.jpg';
const circleHandsLighter = '/static/images/circle_hands_lighter.jpg';

const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
`;

const Heading = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  text-align: left;
  color: white;
  background-image: url(${scalesJustice});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: -2;
  font-family: 'Assistant';

  @media (max-width: 768px) {
    height: 40vh;
  }

  h1 {
    font-size: 50px;
    line-height: 1.25em;
    @media (max-width: 768px) {
      font-size: 35px;
    }
    @media (max-height: 768px) {
      font-size: 35px;
      margin-top: 70px;
    }

    @media (max-width: 414px) {
      font-size: 18px;
    }
    /* iPhone 5 */
    @media (max-width: 320px) {
      font-size: 16px;
    }
  }
  /* @media (max-width: 414px) and (max-height: 736px) {
    height: 368px;
  } */
`;

const Overlay = styled.div`
  background-color: rgba(0, 52, 88, 0.3);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Grid = styled.div`
  height: 40vh;
  display: grid;
  bottom: 0;
  grid-template-columns: 50% 50%;

  /* iPhone X  */
  @media (max-width: 812px) and (max-height: 375px) {
    grid-template-columns: 100%;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }

  @media (max-width: 768px) {
    height: 60vh;
  }

  /* @media (max-width: 414px) and (max-height: 736px) {
    height: 368px;
  } */
`;

const Practice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 200px;
  color: #fff;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;
  border: 2px solid #fff;
  color: ${props => props.theme.blue};

  @media (max-width: 1024px) {
    padding: 20px;
  }
  /* @media (max-width: 414px) and (max-height: 736px) {
    height: 144px;
  } */

  @media (max-width: 414px) {
    padding: 10px;
  }

  h2 {
    margin: 0 0 20px;
    padding: 0;
    font-size: 40px;
    position: relative;
    z-index: 3;
    font-weight: 500;
    @media (max-height: 768px) {
      font-size: 30px;
    }

    @media (max-width: 768px) {
      font-size: 35px;
    }

    @media (max-width: 414px) {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }

  p {
    margin: 0;
    font-size: 25px;
    line-height: 40px;
    position: relative;
    z-index: 3;
    @media (max-height: 768px) {
      font-size: 20px;
      line-height: 30px;
    }

    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 30px;
    }

    @media (max-width: 414px) {
      font-size: 15px;
    }
  }

  a {
    position: relative;
    z-index: 3;
  }
`;

const GridOverlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.overlayColor};
  z-index: 2;
  position: absolute;
`;

const AboutContainer = styled.div`
  background-image: url(${dallas});
  background-position: bottom;
  background-size: cover;
  position: relative;
  z-index: 1;
  color: ${props => props.theme.dark};

  h2 {
    margin: 0;
    padding-top: 50px;
    font-size: 50px;
    color: ${props => props.theme.darkBlue};
    @media (max-height: 768px) {
      font-size: 40px;
    }

    @media (max-width: 768px) {
      padding-top: 30px;
    }
  }

  p {
    font-size: 20px;
    line-height: 35px;
    margin-bottom: 25px;

    @media (max-height: 768px) {
      font-size: 20px;
      line-height: 30px;
    }

    @media (max-width: 414px) {
      font-size: 17px;
      line-height: 25px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const AboutBackground = styled.div`
  background-color: #fff;
  padding: 0 80px;
  position: relative;
  z-index: 3;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 414px) {
    padding: 10px;
  }

  a {
    position: relative;
    z-index: 10;
  }
`;

const AboutOverlay = styled.div`
  background-color: rgba(0, 52, 88, 0.9);
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
  top: 0;
  left: 0;
`;

class Home extends Component {
  state = {
    isVisible: false,
  };

  componentDidMount() {
    this.setState({ isVisible: true });
  }
  render() {
    return (
      <div>
        <HomeContainer>
          <Heading>
            <Container>
              <Spring
                from={{ opacity: 0, marginLeft: -200 }}
                to={{ opacity: 1, marginLeft: 0 }}
                config={{ duration: 500, delay: 0 }}
              >
                {props => (
                  <div style={props}>
                    <h1>
                      One block at a time, we build a{' '}
                      <span style={{ color: LightBlue }}>legal strategy</span>
                      <br /> rooted in protecting you and your family.
                    </h1>
                  </div>
                )}
              </Spring>
              <Overlay />
            </Container>
          </Heading>
          <Grid>
            <Practice image={redHeartLighter}>
              <div style={{ zIndex: 20 }}>
                <Spring
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}
                  config={{ delay: 500 }}
                >
                  {props => (
                    <div style={props}>
                      <h2>Family Law</h2>
                      <p>We work to guide your family through this process.</p>
                      <Link href='family-law'>
                        <a>
                          <Button
                            textColor='#085c8e'
                            marginTop='20px'
                            element={'a'}
                          >
                            Learn More
                          </Button>
                        </a>
                      </Link>
                    </div>
                  )}
                </Spring>
              </div>
            </Practice>
            <Practice image={circleHandsLighter}>
              <div style={{ zIndex: 20 }}>
                <Spring
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}
                  config={{ delay: 500 }}
                >
                  {props => (
                    <div style={props}>
                      <h2>LGBTQ Law</h2>
                      <p>
                        We recognize the specific legal concerns of the LGBTQ
                        community.
                      </p>
                      <Link href='/lgbtq-law'>
                        <a>
                          <Button
                            textColor='#085c8e'
                            marginTop='20px'
                            element={'a'}
                          >
                            Learn More
                          </Button>
                        </a>
                      </Link>
                    </div>
                  )}
                </Spring>
              </div>
            </Practice>
          </Grid>
        </HomeContainer>
        <AboutContainer>
          <Container>
            <AboutBackground>
              <h2>About Us</h2>
              <p>
                Duggan Law Firm, PC is a boutique law firm that actively serves
                Collin, Dallas, Denton, and Tarrant counties, and provides
                impactful legal representation and advice to clients facing a
                range of legal concerns including family law and LGBTQ specific
                issues. Our method of representing clients is to aggressively
                advocate for each client, actively taking into account each
                client’s specific desired outcome and approach to each case.
                When you need an attorney, you want an attorney who understands
                the sensitive nature of the issues while advocating on your
                behalf.
              </p>
              <p style={{ fontWeight: 700 }}>
                One block at a time, we work with you to build a legal strategy
                rooted in protecting what is most important to you and your
                family.
              </p>
              <p>
                At Duggan Law Firm, PC, we continually strive to get to know our
                clients on a personal level and to understand their unique
                situation. We take care and consideration when dealing with the
                emotional aspects involved in divorce, child custody, property
                division, adoptions and other important issues that affect your
                family.
              </p>
              <p>
                <Link href='/family-law'>
                  <a
                    style={{
                      color: MedBlue,
                      textDecoration: 'none',
                      fontWeight: 700,
                    }}
                  >
                    Family law
                  </a>
                </Link>{' '}
                matters are not only emotionally draining but can also be
                financially demanding as well. Our goal is to achieve your
                objectives efficiently and effectively. We are dedicated to
                moving your case forward and resolving your case with the least
                amount of stress possible. We take an interest in you, your
                family and your future.
              </p>
              <p>
                We invite you to{' '}
                <Link href='/contact'>
                  <a
                    style={{
                      color: MedBlue,
                      textDecoration: 'none',
                      fontWeight: 700,
                    }}
                  >
                    contact
                  </a>
                </Link>{' '}
                our firm and discuss your family law or divorce issue. We can
                help you bring your family law matter to a resolution, and you
                can have confidence that your interests will be protected, and
                your goals and objectives will be given the highest priority.
              </p>
              <p>
                It is vital that you protect your interests and consult an
                attorney about your case as soon as you find yourself facing
                legal challenges. The stakes are high, and we know nothing is
                more important than your family and your future. Let the
                successful team at Duggan Law Firm, PC work to build up your
                future, block by block.
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingTop: '50px',
                  paddingBottom: '50px',
                }}
              >
                <Link href='/attorneys'>
                  <a>
                    <Button textColor={Blue}>Meet Our Attorneys</Button>
                  </a>
                </Link>
              </div>
            </AboutBackground>
          </Container>
          <AboutOverlay />
        </AboutContainer>
      </div>
    );
  }
}

export default Home;
