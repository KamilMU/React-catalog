import React from 'react';
import EmptyBasket from './EmptyBasket'
import BasketProducts from './BasketProducts'

function Basket({ basketProducts, onDelete }) {
  return (
    <div>
      {basketProducts === [] ? <EmptyBasket /> : <BasketProducts basketProducts={basketProducts} onDelete={onDelete} />}
    </div>
  )
}


export default Basket