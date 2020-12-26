import React from 'react'
import Aux from '../../../hoc/Auxilliary'
import Button from '../../UI/Button/Button'

const OrderSummary = props=> {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
        <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}:</span> {props.ingredients[igKey]}
        </li>)
    })
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delecious burger with the following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p>Continue to checkout?</p>
            <p ><strong>Total Price: $ {props.total.toFixed(2)}</strong></p>
            <Button btnType='Danger' clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    )
}

export default OrderSummary