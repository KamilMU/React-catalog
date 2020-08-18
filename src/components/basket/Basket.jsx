import React from 'react';
import EmptyBasket from './EmptyBasket'
import BasketProducts from './BasketProducts'

function Basket({ basketProducts, onDelete }) {
  return (
    <ul className="products-container">
    {basketProducts === [] ? <EmptyBasket /> : <BasketProducts basketProducts={basketProducts} onDelete={onDelete} />}
    </ul>
  )
}


export default Basket