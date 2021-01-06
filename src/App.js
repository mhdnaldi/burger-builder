import React, { PureComponent } from "react";
import Layout from "./containers/BurgerBuilder/Layout/Layout";
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuiler';
import axios from 'axios'

axios.defaults.baseURL = 'https://react-myburger-763c5-default-rtdb.firebaseio.com'

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
