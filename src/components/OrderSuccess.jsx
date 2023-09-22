import '../styles/order-success.css';
import React from 'react';
import CheckCircleIcon from '@material-ui/icons/Beenhere';

const OrderSuccess = () => {
  return (
    <div id="success">
      <div id="success-header">
        <p id="success-title">
          <CheckCircleIcon id="success-check" />
          ORDER SUCCESSFUL
        </p>
      </div>
      <p id="order-id">ORDER ID: #{Date.now().toString()}</p>
    </div>
  );
};

export default OrderSuccess