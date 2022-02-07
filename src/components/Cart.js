import React, { createContext, useEffect, useReducer } from 'react';
import ContextCart from './ContextCart';
import { products } from './Product';
import {reducer} from './Reducer'
export const DataContext = createContext()

// initialState 
const initialState = {
    item: products,
    totalItem: 0,
    totalAmount: 0
}
const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

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

    useEffect(() =>{
        dispatch({type: 'GET_ALL'})
    },[state.item])
    return (
         <DataContext.Provider value={{...state,removeItem,clearAll,increment,dicrement}}>
            <ContextCart />
         </DataContext.Provider>
    );
};

export default Cart;