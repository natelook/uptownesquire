import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Container } from './styles/Tools';
import { Blue, Dark, Light, MedBlue, LightBlue } from './styles/Colors';

const logo = '/static/images/logo.png';

const LoadingBg = styled.div`
  background-color: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.div`
  /* height: 100px; */
  background-color: ${props =>
    props.scroll || props.home != '/'
      ? 'rgba(255, 255, 255, 0.9)'
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
    font-weight: 500;
    position: relative;

    &:hover {
      color: ${LightBlue};
    }
  }
`;

const ImageContainer = styled.div`
  margin-left: 100px;
  margin-top: 10px;

  img {
    transition: 0.5s;
    width: ${props => (props.scroll || props.home != '/' ? '175px' : '200px')};
  }
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  position: absolute;
  right: 100px;
`;

const NavItem = styled.li`
  margin: 0 15px;
  font-size: 21px;

  &:last-child {
    margin-right: 0;
  }
`;

const Ring = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid ${Blue};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${Blue} transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

class Header extends Component {
  state = {
    loading: true,
    scrolled: false,
  };

  componentWIllMount() {
    this.setState({
      loading: true,
    });
  }

  listenScrollEvent = e => {
    if (window.scrollY > 30) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  componentDidMount() {
    this.setState({ loading: false });
    window.addEventListener('scroll', this.listenScrollEvent);
    console.log(this.props.page);
  }
  render() {
    const { loading, scrolled, notHome } = this.state;
    return (
      <div>
        {loading ? (
          <LoadingBg>
            <Ring>
              <div />
              <div />
              <div />
              <div />
            </Ring>
          </LoadingBg>
        ) : (
          <Nav scroll={scrolled} home={this.props.page}>
            <ImageContainer scroll={scrolled} home={this.props.page}>
              <Link href="/">
                <a>
                  <img src={logo} alt="Duggan Law Firm, PC logo." />
                </a>
              </Link>
            </ImageContainer>
            <NavList>
              <NavItem>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/attorneys">
                  <a>Attorneys & Staff</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/family-law">
                  <a>Family Law</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/lgbtq-law">
                  <a>LGBTQ Law</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </NavItem>
            </NavList>
          </Nav>
        )}
      </div>
    );
  }
}

export default Header;
