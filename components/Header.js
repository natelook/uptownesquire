import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Spring } from 'react-spring';
import MobileNavList from './MobileNavList';

const logo = '/static/images/logo.png';
const whiteLogo = '/static/images/logo-white.png';

const Nav = styled.div`
  background-color: ${props =>
    props.scroll || props.home != '/'
      ? 'rgba(255, 255, 255, 1)'
      : 'rgba(255, 255, 255, 0)'};
  padding: ${props => (props.scroll || props.home != '/' ? '5px 0' : '20px 0')};
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  color: #000;
  box-shadow: ${props =>
    props.scroll || props.home != '/' ? '0px -20px 50px 6px #000' : null};
  z-index: 10;
  transition: 0.5s;
  a {
    color: ${props =>
      props.scroll || props.home != '/' ? props.theme.dark : props.theme.light};
    text-decoration: none;
    font-weight: 400;
    position: relative;

    &:hover {
      color: ${props => props.theme.lightBlue};
    }
  }
`;

const ImageContainer = styled.div`
  margin-left: 50px;
  margin-top: 10px;

  @media (max-width: 1024px) {
    margin-left: 10px;
  }

  img {
    transition: 0.5s;
    width: ${props => (props.scroll || props.home != '/' ? '175px' : '200px')};

    @media (max-width: 414px) {
      width: ${props =>
        props.scroll || props.home != '/' ? '125px' : '150px'};
    }
  }
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  position: absolute;
  right: 50px;

  @media (max-width: 1024px) {
    right: 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Burger = styled.div`
  display: none;
  position: fixed;
  height: 40px;
  width: 40px;
  right: 20px;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: 300ms;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Patty = styled.span`
  content: '';
  width: 100%;
  height: 2px;
  background-color: ${props =>
    props.scrolled || props.home != '/' ? props.theme.dark : props.theme.light};
  position: absolute;
  transition: 0.3s;

  &:first-child {
    top: ${props => (props.open ? '20px' : '8px')};
    transform: ${props => (props.open ? 'rotate(45deg)' : null)};
  }

  &:nth-child(2) {
    opacity: ${props => (props.open ? '0' : '1')};
  }

  &:last-child {
    top: ${props => (props.open ? '20px' : '30px')};
    transform: ${props => (props.open ? 'rotate(-45deg)' : null)};
  }
`;

const Slider = styled.div`
  display: none;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.darkBlue};
  z-index: 9;
  right: ${props => (props.open ? '0' : '-2000px')};
  transition: 0.5s;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavItem = styled.li`
  margin: 0 15px;
  font-size: 23px;

  @media (max-width: 1024px) {
    font-size: 18px;
    margin: 0 7px;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const PhoneNumber = styled.div`
  background-color: ${props => props.theme.blue};
  color: ${props => props.theme.light};
  /* display: ${props => (props.visible ? 'block' : 'hidden')}; */
  position: absolute;
  width: 200px;
  right: ${props => (props.visible ? '-25px' : '-100px')};
  text-align: center;
  border-radius: 5px;
  transition: 300ms;
  opacity: ${props => (props.visible ? 1 : 0)};

  p {
    padding: 4px;
    margin: 4px;
  }
`;

const FakeBar = styled.div`
  height: 100px;
  position: fixed;
`;

class Header extends Component {
  state = {
    scrolled: false,
    open: false,
    numberOpen: false,
  };

  componentWIllMount() {
    this.setState({
      loading: true,
    });
  }

  openNav = () => {
    const { open } = this.state;
    open ? this.setState({ open: false }) : this.setState({ open: true });
  };

  openPhoneNumber = () => {
    const { numberOpen } = this.state;
    numberOpen
      ? this.setState({ numberOpen: false })
      : this.setState({ numberOpen: true });
  };

  listenScrollEvent = e => {
    if (window.scrollY > 30) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  render() {
    const { scrolled, notHome, open, numberOpen } = this.state;

    return (
      <div>
        <Slider open={open}>
          <MobileNavList toggle={this.openNav} />
        </Slider>
        <Spring from={{ top: '-200px' }} to={{ top: 0 }} delay={700}>
          {props => (
            <Nav scroll={scrolled} home={this.props.page} style={props}>
              <ImageContainer scroll={scrolled} home={this.props.page}>
                <Link href='/'>
                  <a>
                    <img
                      src={
                        scrolled || this.props.page != '/' ? logo : whiteLogo
                      }
                      alt='Jamie Duggan Law Firm Logo'
                    />
                  </a>
                </Link>
              </ImageContainer>
              <NavList>
                <NavItem onClick={this.openNav}>
                  <Link href='/'>
                    <a>Home</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href='/attorneys'>
                    <a>Attorneys & Staff</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href='/family-law'>
                    <a>Family Law</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href='/lgbtq-law'>
                    <a>LGBTQ Law</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href='/blog'>
                    <a>Blog</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href='/contact'>
                    <a>Contact</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <img
                    style={{ height: '25px', width: '25px' }}
                    src={
                      scrolled || this.props.page != '/'
                        ? '/static/images/phone.png'
                        : '/static/images/phone-white.png'
                    }
                    onClick={this.openPhoneNumber}
                  />
                  <PhoneNumber visible={numberOpen}>
                    <p>214-494-1647</p>
                  </PhoneNumber>
                </NavItem>
                <NavItem>
                  <a href='mailto:info@uptownesquire.com'>
                    <img
                      style={{ height: '25px', width: '25px' }}
                      src={
                        scrolled || this.props.page != '/'
                          ? '/static/images/email.png'
                          : '/static/images/email-white.png'
                      }
                    />
                  </a>
                </NavItem>
              </NavList>
              <Burger
                onClick={this.openNav}
                scrolled={scrolled}
                home={this.props.page}
              >
                <Patty scrolled={scrolled} home={this.props.page} open={open} />
                <Patty scrolled={scrolled} home={this.props.page} open={open} />
                <Patty scrolled={scrolled} home={this.props.page} open={open} />
              </Burger>
            </Nav>
          )}
        </Spring>
      </div>
    );
  }
}

export default Header;
