import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

const theme = {
  light: '#fff',
  dark: '#333',
  blue: '#085c8e',
  lightBlue: '#94d9f8',
  darkBlue: '#003458',
  medBlue: '#509abb',
  lightTan: '#aea9a5',
  darkTan: '#716558',
  errorRed: '#ff0033',
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 1.5em;
    position: relative;

    @media (max-width: 768px) {
      font-size: 18px;
    }

  }
`;

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Meta />
        <Header page={props.page} />
        {props.children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
