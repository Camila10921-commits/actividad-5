// src/components/OrderSummary.js
import styled from 'styled-components';
import '../styles/styles.css';  // Importa CSS tradicional
import '../styles/styles.scss';


// Styled-components para el botón
const OrderButton = styled.button`
  background-color: #3829e0;
  color: white;
  border: none;
  padding: 15px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #574bff;
  }
`;

const OrderSummary = () => {
  return (
    <div className="order-summary-container">
      <h2>Order Summary</h2>
      <ul className="order-summary-list">
        <li className="order-item">
          <span className="item-name">Annual Plan</span>
          <span className="item-price">$59.99/year</span>
        </li>
      </ul>
      <OrderButton>Complete Order</OrderButton>
    </div>
  );
};

export default OrderSummary;
