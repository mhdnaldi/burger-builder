import React, { PureComponent } from "react";
import Layout from "./containers/Layout/Layout";

class App extends PureComponent {
  render() {
    return (
      <div>
        <Layout>
          <h1>Test</h1>
        </Layout>
      </div>
    );
  }
}

export default App;
