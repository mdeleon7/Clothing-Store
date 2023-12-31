import React, { useState, useEffect } from 'react';
import '../styles/item.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ScrollToTop from './functions/ScrollToTop';
import { useParams } from 'react-router-dom';

const Item = (props) => {
  const { cards, cart, setCart } = props;
  const {title} = useParams()
  
  const [size, setSize] = useState('');

  //+ get item
  const findCard = cards.find((item) => item.title === title);
  const itemClone = Object.assign({}, findCard);
  const checkItem = cart.some((item) => item.title === itemClone.title);
  const findItem = cart.findIndex(
    (item) => item.title === itemClone.title && item.size === size
  );
  const findSize = cart.some(
    (item) => item.title === itemClone.title && item.size === size
  );

  //+ ADD ITEM ON SUBMIT
  const submitQuantity = (e) => {
    e.preventDefault();
    const errorMessage = document.getElementById('item-error-message');
    errorMessage.style.setProperty('animation', '');
    errorMessage.style.setProperty('opacity', '0');
    if (size !== '' || itemClone.type === 'Accessories') {
      itemClone.quantity = 1;
      //+ IF ITEM DOES NOT EXIST OR IF ITEM EXISTS BUT SIZE DOES NOT
      if (checkItem !== true || findSize !== true) {
        itemClone.size = size;
        itemClone.key = Date.now().toLocaleString();
        setCart([itemClone, ...cart]);
        //+ IF CURRENT ITEM AND SIZE EXISTS
      } else if (cart[findItem].quantity < 5) {
        setCart((old) => [...old], {
          [cart[findItem]]: (cart[findItem].quantity = parseFloat(
            cart[findItem].quantity + 1
          )),
        });
      } else {
        errorMessage.style.setProperty('animation', 'fade-in .5s forwards');
      }
    }
  };

  //+ RESET SIZE FORM ON CART UPDATE
  useEffect(() => {
    document.getElementById('size-form').reset();
    setSize('');
  }, [cart]);

  //+ UPDATE SIZE STATE ON CHANGE
  const handleChange = () => {
    const sizeForm = document.getElementById('size-form-select');
    const { value } = sizeForm;
    setSize(value);
  };

  //+ BACK BUTTON
  const goBack = () => {
    window.history.back();
  };

  return (
    <div id="item-page">
      <ScrollToTop />
      <div id="item-inner">
        <div id="item-gradient" />
        <img id="item-page-image" src={itemClone.src} alt="one" />
        <div id="item-page-details">
          <p id="item-brand">{itemClone.brand}</p>
          <p id="item-page-title">
            {itemClone.title}
            <ArrowRightAltIcon id="back-icon" onClick={goBack} />
          </p>
          <p id="item-page-price">
            ${Number(itemClone.price).toLocaleString('en-US')}
          </p>
          <p id="item-page-description">{itemClone.description}</p>
          <form
            id="size-form"
            onChange={handleChange}
            onSubmit={submitQuantity}
          >
            {itemClone.type !== 'Accessories' ? (
              <select id="size-form-select" defaultValue="none">
                <option disabled value="none">
                  Size
                </option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            ) : null}
            <button className="submit-button" type="submit">
              ADD TO CART
            </button>
          </form>
          <p id="item-error-message">* Max Quantity Reached</p>
        </div>
      </div>
    </div>
  );
};

export default Item;