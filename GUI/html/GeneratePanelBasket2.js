import React from 'react';
import { Link } from 'react-router-dom';

const GeneratePanelBasket = ({ product }) => {
  const handlePayment = () => {
    // You can perform any actions before navigating, if needed
  };

  return (
    <div className="cart-item">
      <img src={product.imageUrl} alt={product.name} />
      <div className="product-details">
        <div className="top-row">
          <h4>{product.name}</h4>
          <p className="price">$<span id={`price-${product.id}`}>{product.price}</span></p>
        </div>
        <div className="bottom-row">
          <h5 style={{ color: 'Tomato' }} className="last-bidder">Właściciel: {product.owner}</h5>
          <h5 style={{ color: 'Tomato' }} className="last-bidder">Ostatni licytujący: {product.buyer}</h5>
          <div className="quantity">
            {/* Use Link to navigate to the payment page */}
            <Link to={`/money?id=${product.id}`}>
              <button onClick={handlePayment}>Płacę</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratePanelBasket;