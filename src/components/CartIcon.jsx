import React from 'react';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';
import Cart from './Cart';

const CartIcon = (props) => {
  const { click, cart, setCart } = props;

  return (
    <div>
      <div onClick={click} id="cart-icon">
        <Badge
          badgeContent={cart.length}
          showZero
          color="error"
          sx={{
            transform: 'scale(0.8) translate(50%, -50%)', // Your styling here
          }}
          overlap='rectangular'
        >
          <ShoppingCartSharpIcon />
        </Badge>
      </div>
      <Cart cart={cart} setCart={setCart} click={click} />
    </div>
  );
};

export default CartIcon;
