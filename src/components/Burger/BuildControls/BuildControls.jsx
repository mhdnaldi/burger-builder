import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label:'Salad', type: 'salad'},
  {label:'Bacon', type: 'bacon'},
  {label:'Cheese', type: 'cheese'},
  {label:'Meat', type: 'meat'},
]

const BuildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: $<strong>{props.total.toFixed(2)}</strong></p>
      {controls.map(ctrl => (
         <BuildControl label={ctrl.label}  key={ctrl.label} added={() => props.addingIngredient(ctrl.type)} removed={() => props.removingIngredient(ctrl.type)} disabled={props.disabled[ctrl.type]}/>
      ))}
    </div>
  )
}

export default BuildControls