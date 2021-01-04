import React, { PureComponent } from "react";
import Layout from "./containers/BurgerBuilder/Layout/Layout";
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuiler';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
