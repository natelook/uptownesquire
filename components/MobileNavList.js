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

const MobileNavList = () => (
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
    <NavItem>
      <a href="tel:2144941647">214-494-1647</a>
    </NavItem>
    <NavItem style={{ display: 'flex', alignItems: 'center' }}>
      <a href="mailto:info@uptownesquire.com">info@uptownesquire.com</a>
    </NavItem>
  </NavList>
);

export default MobileNavList;
