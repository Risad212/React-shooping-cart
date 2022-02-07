import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { DataContext } from './Cart';
import './Cart.css';


const Item = ({id,title, description, img,quantity, price}) => {
    const {removeItem,increment,dicrement} = useContext(DataContext)
    return (
        <>
         <div className="items-info">
        <div className="product-img">
          <img src={img} alt="iamge" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <FontAwesomeIcon icon={faMinus} onClick={() => dicrement(id)}/>
          <input type="text" placeholder={quantity} disabled />
          <FontAwesomeIcon icon={faPlus} onClick={() => increment(id)} />
        </div>

        <div className="price">
          <h3>{price}₹</h3>
        </div>

        <div className="remove-item">
          <FontAwesomeIcon icon={faTrashAlt} onClick={() => removeItem(id)}/>
        </div>
      </div>
      <hr />
        </>
    );
};

export default Item;