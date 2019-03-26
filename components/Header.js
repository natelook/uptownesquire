import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Spring } from 'react-spring';
import { Blue, Dark, Light, MedBlue, LightBlue } from './styles/Colors';
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
  z-index: 5;
  transition: 0.5s;
  a {
    color: ${props => (props.scroll || props.home != '/' ? Dark : Light)};
    text-decoration: none;
    font-weight: 400;
    position: relative;

    &:hover {
      color: ${LightBlue};
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
  position: absolute;
  height: 40px;
  width: 40px;
  right: 20px;
  align-items: center;
  justify-content: center;
  z-index: 15;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Patty = styled.span`
  content: '';
  width: 100%;
  height: 2px;
  background-color: ${props =>
    props.scrolled || props.home != '/' ? '#000' : '#fff'};
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
  width: 300px;
  background-color: rgba(50, 50, 50, 0.9);
  z-index: 5;
  right: ${props => (props.open ? '0' : '-300px')};
  transition: 0.5s;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavItem = styled.li`
  margin: 0 15px;
  font-size: 21px;

  @media (max-width: 1024px) {
    font-size: 18px;
    margin: 0 7px;
  }

  &:last-child {
    margin-right: 0;
  }
`;

class Header extends Component {
  state = {
    scrolled: false,
    open: false,
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
    const { scrolled, notHome, open } = this.state;

    return (
      <div>
        <Slider open={open}>
          <MobileNavList />
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
                <NavItem>
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
                  <a href='tel:2144941647'>
                    <img
                      style={{ height: '25px', width: '25px' }}
                      src={
                        scrolled || this.props.page != '/'
                          ? '/static/images/phone.png'
                          : '/static/images/phone-white.png'
                      }
                    />
                  </a>
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
              <Burger onClick={this.openNav}>
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
