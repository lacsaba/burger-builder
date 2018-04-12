import React, { Component } from 'react';

import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <p>Almost before we knew it, we had left the ground.</p>
        <p style={{ fontFamily: 'sans-serif'}}>Almost before we knew it, we had left the ground.</p>
      </Layout>
    );
  }
}

export default App;
