import { faArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import Item from './Item'
import './Cart.css'
import { DataContext } from './Cart';

const ContextCart = () => {
    const {item,clearAll,totalItem,totalAmount} = useContext(DataContext)
    return (
        <>
          <header>
        <div className="continue-shopping">
          <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon"/>
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} className="cart"/>
          <p>{totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem} </span> items
          in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            {
              item.map((curElem) =>{
                  return <Item {...curElem} key={curElem.id}/>
              })
            }
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>{totalAmount}₹</span>
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

export default ContextCart;