import React, { Component } from 'react'
import Aux from '../../hoc/Auxilliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinners from '../../components/UI/Spinners/Spinners'
import axios from 'axios'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 1,
    purchasable: false,
    purchasing: false,
    loading: false
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients).map(igKey => {
      return ingredients[igKey]
    }).reduce((sum, el) => {
      return sum + el
    }, 0)

    this.setState({purchasable: sum>0})
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
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
    this.updatePurchaseState(updatedIngredients)
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
    this.updatePurchaseState(updatedIgredients)

  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHandler = () => {
    this.setState({loading: true})
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice.toFixed(2),
      customer: {
        name: 'Levi',
        address: {
          street: 'Trost street',
          country: 'Paradise',
          zipCode: '212332'
        },
        email: 'levi@gmail.com'
      },
      deliveryMode: 'Fastest'
    }

    axios.post('/orders.json', order)
    .then(res => {
      this.setState({loading: false, purchasing: false})
    })
    .catch(err => {
      this.setState({loading: false, purchasing: false})
    })
  }

  render() {
    const disabledInfo = {...this.state.ingredients}
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0 
    }

    let orderSummary = <OrderSummary ingredients={this.state.ingredients} purchaseCancel={this.purchaseCancelHandler} purchaseContinue={this.purchaseContinueHandler} total={this.state.totalPrice}/>

    if(this.state.loading) {
      orderSummary = <Spinners />
    }

    return(
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
        {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls addingIngredient={this.addIngredientHandler} removingIngredient={this.removeIngredientHandler} disabled={disabledInfo} total={this.state.totalPrice} purchasable={this.state.purchasable} ordered={this.purchaseHandler}/>
      </Aux>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios)