import React from 'react';

function BasketProducts({ basketProducts, onDelete }) {
  return (
    <ul className="products-container">
      {basketProducts.map(item =>
        <li className="products-container__item" key={item.id}>
          <div className="products-container__item-img"><img src={item.imgUrl} alt="" /></div>
          <div className="products-container-item-wrapper">
            <span className="products-container__item-name">{item.itemName}</span>
            <div>{`${item.price} руб.`}</div>
            <button className="products-container__item-btn" onClick={() => onDelete(item.id)}>Удалить из корзины</button>
          </div>
        </li>
      )}
    </ul>
  )
}


export default BasketProducts