import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Spring } from 'react-spring';
import Scroll from 'react-scroll';
import Layout from '../components/Layout';
import { Container } from '../components/styles/Tools';
import {
  DarkBlue,
  Blue,
  MedBlue,
  LightBlue,
} from '../components/styles/Colors';

const circleHands = '/static/images/circle_hands.jpg';

const Background = styled.div`
  background-color: ${DarkBlue};
`;

const ContainerBackground = styled.div`
  background-color: #fff;
  padding-bottom: 100px;

  @media (max-width: 768px) {
  }

  h1 {
    color: ${Blue};
  }

  h2 {
    @media (max-width: 768px) {
      font-size: 25px;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;

  /* @media (max-width: 414px) {
    grid-template-columns:
  } */
`;

const PracticeType = styled.div``;

const Heading = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  position: relative;
  height: 300px;
  background-image: url(${circleHands});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
    position: relative;
    z-index: 3;
    text-align: center;
    font-size: 50px;
  }
`;

const HeadingOverlay = styled.div`
  background-color: rgba(8, 92, 142, 0.5);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

const Bio = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  padding: 0 40px;

  @media (max-width: 414px) {
    padding: 0 20px;
  }
`;

const OpenPractice = styled.div`
  padding-left: 50px;
  @media (max-width: 414px) {
    padding: 0 20px;
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

const PracticeList = styled.div`
  margin-left: 30px;
  display: flex;
  margin-top: 50px;
  padding: 0 20px;
  text-align: right;

  ul {
    list-style: none;
    padding: 0;
  }

  @media (max-width: 768px) {
    padding: 0 5px;
  }

  @media (max-width: 414px) {
    grid-column-start: 1;
    grid-column-end: 3;
    text-align: left;
    margin-left: 0;
    padding: 0 20px;
  }
`;

const ContactLink = styled.div`
  margin-top: 40px;

  display: flex;
  justify-content: center;
  a {
    color: ${MedBlue};
    text-decoration: none;
    font-size: 22px;
  }
`;

const PracticeItem = styled.li`
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  color: ${props => (props.selected ? MedBlue : '#000')};

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const PracticeUl = styled.ul`
  @media (max-width: 414px) {
  }
`;

const Transgender =
  '<p>Whether it be a request from the court for a name and gender marker change or a divorce or custody concern, our attorneys understand the complex legal issues facing our transgender clients. We have successfully represented transgender clients in difficult custody and divorce suits and take pride in our fierce advocacy. Our attorneys also have experience in successfully obtaining court orders allowing our transgender clients to change their name and/or correct their gender marker.</p><p>As laws continue to evolve in areas specifically concerning transgender people in Texas, the Duggan Law Firm, PC can provide advice specific to each client’s situation.</p>';
const NameChanges =
  '<p>For a variety of reasons, both personal and legal, many people choose to change their name. Our attorneys can help guide you through the process of obtaining a legal court order to change your name and/or correct your gender marker. Navigating the legal process and court system is not always an easy task and can be highly exhausting and stressful to attempt without the help of an attorney. The Duggan Law Firm, PC can help to provide as smooth and expeditious a process as possible.</p>';
const SameSexDivorce =
  '<p>In the landmark decision in Obergefell v. Hodges, the United States Supreme Court brought marriage equality to all States, including Texas. The process of dissolving the marriage relationship is now the same for all people in Texas. However, complex and unique legal issues still exist for LGBT couples facing divorce including those related to property division and parental rights. Our office has extensive experience representing LGBT clients facing divorce and custody disputes. We actively work to maintain our knowledge and focus on legal issues facing the LGBT community in order to ensure the best possible legal representation for our clients.</p><p>To avoid being misinformed about the laws relating to your divorce or custody dispute, it is imperative to seek guidance from the legal professionals at Duggan Law Firm, PC who can provide important information about your specific circumstances. As the laws continue to change and evolve in this area, the attorneys at Duggan Law Firm, PC are committed to staying apprised of the various changes affecting their clients.</p>';
const SecondParentAdoption =
  '<p>Even with the Supreme Court decision in Obergefell v. Hodges and the realization of marriage equality for all, questions regarding the rights and protections of LGBT families remain unanswered. Without specific legal protections and recognition of LGBT families and their parental rights, second parent adoptions are recommended and necessary to ensure the rights of LGBT parents. The attorneys at Duggan Law Firm, PC can guide you and your family through the specifics of your situation and provide the guidance and legal support necessary to complete a second parent adoption. </p>';
const NonBiologicalParents =
  '<p>Often times, the most difficult family law issue people face concerns the ability to maintain a presence in the life of a child. Individuals who provide long-term care to children, act as a parental figure or are even treated as a parent are not always afforded the legal ability to maintain a presence in that child’s life. Our law firm provides zealous advocacy to represent clients who wish to continue a relationship with a child in their life when they’ve met certain legal requirements. Many of these cases require immediate action to avoid losing opportunities to assert these rights, therefore, legal advice should be sought without delay.</p>';

class LgbtqLaw extends Component {
  state = {
    selectedPractice: Transgender,
    title: 'Transgender Legal Concerns',
  };

  selectPractice = (selection, name) => {
    const scroll = Scroll.animateScroll;
    const title = document.getElementById('area-title');
    scroll.scrollTo(title.offsetTop);
    this.setState({ selectedPractice: selection, title: name });
  };

  render() {
    const { selectedPractice, title } = this.state;
    return (
      <Background style={{ paddingTop: '75.328px' }}>
        <Container>
          <ContainerBackground>
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ duration: 500 }}>
              {props => (
                <div style={props}>
                  <Grid>
                    <Heading id="area-title">
                      <h1>LGBTQ Law</h1>
                      <HeadingOverlay />
                    </Heading>
                    <Bio>
                      <p>
                        The law firm of Duggan Law Firm, PC understands that not
                        all people are the same and we celebrate the diversity
                        of each of our clients. In Texas, people who identify as
                        part of the LGBTQ community often face unique challenges
                        in dealing with legal issues. Our attorneys are
                        dedicated to approaching each client and each legal
                        situation with the utmost case, respect and advocacy.
                        Duggan Law Firm, PC is committed to staying apprised of
                        evolving legal trends and laws specific to the LGBT
                        community.
                      </p>
                    </Bio>
                    <OpenPractice>
                      <h2>{title}</h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: selectedPractice,
                        }}
                      />
                      <ContactLink>
                        <Link href="/contact">
                          <a>Conact us about {title.toLowerCase()}.</a>
                        </Link>
                      </ContactLink>
                    </OpenPractice>
                    <PracticeList>
                      <div>
                        <h2>Explore More</h2>
                        <PracticeUl>
                          <PracticeItem
                            onClick={() =>
                              this.selectPractice(
                                Transgender,
                                'Transgender Legal Concerns',
                              )
                            }
                            selected={
                              this.state.title == 'Transgender Legal Concerns'
                            }>
                            Transgender Legal Concerns
                          </PracticeItem>
                          <PracticeItem
                            onClick={() =>
                              this.selectPractice(NameChanges, 'Name Changes')
                            }
                            selected={this.state.title == 'Name Changes'}>
                            Name Changes
                          </PracticeItem>
                          <PracticeItem
                            onClick={() =>
                              this.selectPractice(
                                SameSexDivorce,
                                'Same Sex Divorce',
                              )
                            }
                            selected={this.state.title == 'Same Sex Divorce'}>
                            Same Sex Divorce & Custody
                          </PracticeItem>
                          <PracticeItem
                            onClick={() =>
                              this.selectPractice(
                                SecondParentAdoption,
                                'Second Parent Adoption',
                              )
                            }
                            selected={
                              this.state.title == 'Second Parent Adoption'
                            }>
                            Second Parent Adoption
                          </PracticeItem>
                          <PracticeItem
                            onClick={() =>
                              this.selectPractice(
                                NonBiologicalParents,
                                'Non-biological Parental Rights',
                              )
                            }
                            selected={
                              this.state.title ==
                              'Non-biological Parental Rights'
                            }>
                            Non-biological Parental Rights
                          </PracticeItem>
                        </PracticeUl>
                      </div>
                    </PracticeList>
                  </Grid>
                </div>
              )}
            </Spring>
          </ContainerBackground>
        </Container>
      </Background>
    );
  }
}

export default LgbtqLaw;
