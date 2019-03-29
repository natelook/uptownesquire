import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Scroll from 'react-scroll';
import { Container } from '../components/styles/Tools';

const familyImage = '/static/images/family.jpeg';

const Background = styled.div`
  background-color: ${props => props.theme.darkBlue};
`;

const ContainerBackground = styled.div`
  background-color: ${props => props.theme.light};
  padding-bottom: 50px;

  @media (max-width: 768px) {
  }

  h1 {
    color: white;
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
  background-image: url(${familyImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
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
  padding: 0 40px;
  text-align: right;

  ul {
    list-style: none;
    padding: 0;
  }

  @media (max-width: 768px) {
    padding: 0 5px;
  }

  @media (max-width: 414px) {
    padding: 0 20px;
    grid-column-start: 1;
    grid-column-end: 3;
    text-align: left;
    margin-left: 0;
  }
`;

const PracticeItem = styled.li`
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  color: ${props => (props.selected ? props.theme.medBlue : props.theme.dark)};

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const ContactLink = styled.div`
  margin-top: 40px;

  display: flex;
  justify-content: center;
  a {
    color: ${props => props.theme.medBlue};
    text-decoration: none;
    font-size: 22px;
  }
`;

const Divorce =
  '<p>We know that you are likely facing one of the most stressful times in your life. Because of this, we focus on helping you minimize the financial and emotional impact of divorce. Our goal is to thoroughly understand the facts you bring to us related to your unique situation. We spend a lot of time asking questions. Once we hear your story, we offer legal guidance that is compassionate, while at the same time, strongly advocates for you, your parenting rights and your financial future.<p>We help you chart the course for the next phase of your life in a positive and productive way. We do this by advising you on every aspect of your divorce, including how to value complex estates with high assets involving business ownership and professional practices. We also help you create equitable parenting and custody arrangements so your family can function together after the divorce.</p><p>In Texas, a divorce, or suit for dissolution of marriage, is the legal process of terminating a marriage along with the rights and responsibilities of the marriage relationship. A divorce changes the legal marital status of the parties.</p><p>Texas is a “no fault” divorce state, which means that a party can dissolve the marriage without having to show that one party caused the break-up of the relationship. If applicable, a party can also ask the court to make a judgment as to the party that caused the break-up of the marriage, which could have an affect of the division of the marital assets.</p><p>If children were born during the marriage, a suit affecting the parent-child relationship will become part of the divorce suit. This part of the suit will contain provisions relating to possession and access to the children and payment of child support.</p>';

const ChildCustody =
  '<p>Duggan Law Firm, PC attorneys understand that your children are the most important part of your life.We work hard to help our clients understand what legal rights and protections are available to them.We listen to our client’s concerns and their desires at to the outcome of their case.Our attorneys can help create effective and creative solutions in cases where agreements between parents can be achieved.Regardless of whether an agreement can be made or not, our attorneys are responsive, aggressive and represent our clients with unwavering dedication to their case.</p > <p>Texas refers to “custody” as conservatorship. Orders involving the rights and duties of parents or someone who cares for a child are done in a Suit Affecting the Parent-Child Relationship. In a divorce, a conservatorship order will be done at the same time as the divorce. Parties who are not married and have children can also seek an order of conservatorship.</p> <p>Conservatorship orders will generally contain an allocation of the rights and duties of each parent or conservator, a schedule of parenting or visitation time, and an order of financial support including child support and medical support.</p> <p>Many factors could become relevant when a court renders a conservatorship order, but all orders will be rendered as to what is in the best interest of the child.</p> <p>Once an order involving a child is put in place, the order remains subject to modification at any time until the child turns 18 years old. A modification suit can be filed to change the terms of an order when there has been a material and substantial change in circumstances since the previous order was put in place.</p>';

const Adoption =
  '<p>Expanding your family by adopting a child is one of the most extraordinary experiences any individual or couple can have. Duggan Law Firm, PC attorneys take pride – and immense joy – in handling adoption cases, including stepparent, second parent, and same-sex adoptions.</p><p>Additionally, there are many situations where it may be appropriate to terminate the legal rights of one parent. Often times in those situations, a step-parent may wish to adopt the child of the other parent. Sometimes a family member or friend may also wish to adopt a child.</p><p>Our Dallas adoption attorneys would love to discuss the circumstances of your specific situation and would welcome the opportunity to work with you regarding the joys of legally recognizing your family.</p>';

const ChildSupport =
  '<p>When parents divorce or separate, one parent will generally owe child support to the other after a court order is established. Child support paid from one parent to another (or from a parent to a non-parent) is a necessary and helpful resource for the child to financially benefit from a parent to have their needs met. A state-supplied child support calculator or formula usually determines how much child support is appropriate, according to numerous factors. Ensuring the proper amount is paid, Duggan Law Firm, PC attorneys advocate vigorously for our clients, making sure the guidelines are met or accurately accumulated.</p>';

const Enforcement =
  '<p>Enforcement proceedings are brought to force a person to obey a court order. The most common enforcement proceedings involve payment of child support, but can also include enforcing the terms of a possession schedule, payment of spousal support, property division in a divorce and more. Enforcement suits can be complex involving various aspects of legal procedure. The attorneys at Duggan Law Firm, PC understand the intensely emotional aspect of a case that sometimes arises in an enforcement suit. We are committed to fiercely advocating for the protection of our clients, their families and their right to have prior court orders obeyed by another party to the order.</p>';

const MaritalAgreements =
  '<p>A Pre-Marital Agreement (often referred to as a pre-nup, or pre-nuptial agreement) is a contract entered into between spouses prior to their marriage. The content of a prenuptial agreement can vary greatly depending on people’s desires, assets and liabilities, but usually includes provisions for division of property and avenues to ensure a proper division instead of costly fees. Duggan Law Firm attorneys can offer invaluable advice regarding the protection of one’s assets and talents through a pre-marital agreement. Although many are reluctant to investigate the issue, a prenuptial agreement can help lay a strong foundation for a couple’s life together, building early the tenants of communication and trust during the prenuptial drafting process.</p><p>A post-marital agreement is a contact entered into between spouses after they have been married. Our attorneys understand the complexities and vast importance of a post-nuptial agreement, especially for couples that have experienced a significant change in circumstances since their marriage, including changing laws occurring after the time of the marriage.</p>';

class FamilyLaw extends Component {
  state = {
    selectedPractice: Divorce,
    title: 'Divorce',
    animateClass: 'animated fadeIn',
  };

  selectPractice = (selection, name) => {
    const scroll = Scroll.animateScroll;
    const title = document.getElementById('area-title');
    scroll.scrollTo(title.offsetTop);

    this.setState({
      animateClass: 'animated fadeIn',
      selectedPractice: selection,
      title: name,
    });
  };
  render() {
    const { selectedPractice, title, animateClass } = this.state;
    return (
      <Background style={{ paddingTop: '75.328px' }}>
        <Container>
          <ContainerBackground>
            <Grid>
              <Heading id="area-title">
                <h1>Family Law</h1>
                <HeadingOverlay />
              </Heading>
              <OpenPractice className={animateClass}>
                <h2>{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: selectedPractice }} />
                <ContactLink>
                  <Link href="/contact">
                    <a>Conact us about {title.toLowerCase()}.</a>
                  </Link>
                </ContactLink>
              </OpenPractice>
              <PracticeList>
                <div>
                  <h2>Explore More</h2>
                  <ul>
                    <PracticeItem
                      onClick={() => this.selectPractice(Divorce, 'Divorce')}
                      selected={this.state.title == 'Divorce'}>
                      Divorce
                    </PracticeItem>
                    <PracticeItem
                      onClick={() =>
                        this.selectPractice(ChildCustody, 'Child Custody')
                      }
                      selected={this.state.title == 'Child Custody'}>
                      Child Custody
                    </PracticeItem>
                    <PracticeItem
                      onClick={() => this.selectPractice(Adoption, 'Adoption')}
                      selected={this.state.title == 'Adoption'}>
                      Adoption
                    </PracticeItem>
                    <PracticeItem
                      onClick={() =>
                        this.selectPractice(ChildSupport, 'Child Support')
                      }
                      selected={this.state.title == 'Child Support'}>
                      Child Support
                    </PracticeItem>
                    <PracticeItem
                      onClick={() =>
                        this.selectPractice(Enforcement, 'Enforcement')
                      }
                      selected={this.state.title == 'Enforcement'}>
                      Enforcement
                    </PracticeItem>
                    <PracticeItem
                      onClick={() =>
                        this.selectPractice(
                          MaritalAgreements,
                          'Pre-Marital & Post Marital Agreements',
                        )
                      }
                      selected={
                        this.state.title ==
                        'Pre-Marital & Post Marital Agreements'
                      }>
                      Pre-Marital & Post-Marital Agreements
                    </PracticeItem>
                  </ul>
                </div>
              </PracticeList>
            </Grid>
          </ContainerBackground>
        </Container>
      </Background>
    );
  }
}

export default FamilyLaw;
