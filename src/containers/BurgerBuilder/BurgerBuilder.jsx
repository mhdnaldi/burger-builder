import React, { Component } from 'react'
import Aux from '../../hoc/Auxilliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    },
    totalPrice: 4
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1
    const updatedIngredients = {...this.state.ingredients}
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
  }

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type]
    if(oldCount === 0) {
      return
    }
    const updatedCount = oldCount - 1
    const updatedIgredients = {...this.state.ingredients}
    updatedIgredients[type] = updatedCount
    const priceDeduction = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceDeduction
    this.setState({totalPrice: newPrice, ingredients: updatedIgredients})

  }
  render() {
    const disabledInfo = {...this.state.ingredients}
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0 
    }
    return(
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls addingIngredient={this.addIngredientHandler} removingIngredient={this.removeIngredientHandler} disabled={disabledInfo} total={this.state.totalPrice}/>
      </Aux>
    )
  }
}

export default BurgerBuilder