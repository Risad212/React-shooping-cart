import React, { createContext, useReducer } from 'react';
import {products} from './Products'
import './Cart.css'
import CartContext from './CartContext';
import {reducer} from './Reducer'


export const ContextCart = createContext()

const initalState = {
  item: products,
  totalAmount: 0,
  totalItem: 0
}

const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initalState)

    // remove indivitual item
    const removeItem = (id) =>{
        dispatch({
        type: 'REMOVE_ITEM',
        payload: id,
     })
    }
    const clearAll = () =>{
        dispatch({
         type: 'CLEAR_ALL'
        })
    }

    const increment = (id) =>{
        dispatch({
          type: 'INCREMENT',
          payload: id,
        })
    }

    const dicrement = (id) =>{
        dispatch({
            type: 'DICREMENT',
            payload: id,
        })
    }

    return (
        <ContextCart.Provider value={{...state, removeItem,clearAll,increment, dicrement}}>
          <CartContext />
        </ContextCart.Provider>
    );
};

export default Cart;