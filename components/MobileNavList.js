import styled from 'styled-components';
import Link from 'next/link';

const NavList = styled.ul`
  list-style: none;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 20px;
  }
`;

const NavItem = styled.li`
  margin: 20px 0;
`;

const MobileNavList = props => (
  <NavList>
    <NavItem>
      <Link href="/">
        <a
          onClick={() => {
            props.toggle();
          }}>
          Home
        </a>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/attorneys">
        <a
          onClick={() => {
            props.toggle();
          }}>
          Attorneys & Staff
        </a>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/family-law">
        <a
          onClick={() => {
            props.toggle();
          }}>
          Family Law
        </a>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/lgbtq-law">
        <a
          onClick={() => {
            props.toggle();
          }}>
          LGBTQ Law
        </a>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/blog">
        <a
          onClick={() => {
            props.toggle();
          }}>
          Blog
        </a>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/contact">
        <a
          onClick={() => {
            props.toggle();
          }}>
          Contact
        </a>
      </Link>
    </NavItem>
    <NavItem>
      <a href="tel:2144941647">214-494-1647</a>
    </NavItem>
    <NavItem style={{ display: 'flex', alignItems: 'center' }}>
      <a href="mailto:info@uptownesquire.com">info@uptownesquire.com</a>
    </NavItem>
  </NavList>
);

export default MobileNavList;
