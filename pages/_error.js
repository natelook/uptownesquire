import React, { Component } from 'react';
import Layout from '../components/Layout';

class Error extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <Layout>
        <div>{this.props.statusCode}</div>
      </Layout>
    );
  }
}

export default Error;
