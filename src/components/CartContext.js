import React, { useContext,} from 'react';
import { faArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Item from './Item';
import {ContextCart} from './Cart'


const CartContext = () => {
    const {item,clearAll} = useContext(ContextCart)

    if(item.length === 0){
      return(
        <>
        <header>
         <div className="continue-shopping">
         <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon"/>
           <h3>continue shopping</h3>
         </div>

      <div className="cart-icon">
        <FontAwesomeIcon icon={faShoppingCart} className="cart"/>
        <p>0</p>
      </div>
    </header>

    <section className="main-cart-section">
      <h1>shopping Cart</h1>
      <p className="total-items">
        you have <span className="total-items-count">0 </span> items
        in shopping cart
       </p>
      </section>
        </>
      )
    }
    return (
        <>
         <header>
           <div className="continue-shopping">
           <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon"/>
             <h3>continue shopping</h3>
           </div>

        <div className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} className="cart"/>
          <p>7</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">7 </span> items
          in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
             {
               item.map((curElem) => {
                   return <Item {...curElem}/>
               })
             }
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>550₹</span>
          </h3>
          <button>checkout</button>
          <button className="clear-cart" onClick={clearAll}>
            Clear Cart
          </button>
        </div>
      </section>
        </>
    );
};

export default CartContext;