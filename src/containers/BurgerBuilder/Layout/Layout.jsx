import React, {Component} from 'react'
import Aux from '../../../hoc/Auxilliary'
import classes from './Layout.module.css'
import Toolbar from '../../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerToggleHandler = () => {
    // EXP 1
    // let newState = this.state.showSideDrawer
    // this.setState({showSideDrawer: !newState})

    // EXP 2
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer}/>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    )
  }
}



export default Layout