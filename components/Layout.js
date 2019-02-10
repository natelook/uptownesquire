import { createGlobalStyle } from 'styled-components';

import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    line-height: 1.5em;
    position: relative;
  }
`;

const Layout = props => {
  return (
    <div>
      <GlobalStyle />
      <Meta />
      <Header page={props.page} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
