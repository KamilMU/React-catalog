import React from 'react'

function SortedItemListById({ sortedItemsById, addPriceInBasket, addProductToBasket }) {
  return (
    sortedItemsById.map(item =>
      <>
        <li className="products-container__item" key={item.itemName}>
          <div className="products-container__item-img"><img src={item.imgUrl} alt="" /></div>
          <div className="products-container-item-wrapper">
            <span className="products-container__item-name">{item.itemName}</span>
            <div>{`${item.price} руб.`}</div>
            <button className="products-container__item-btn" onClick={() => { addPriceInBasket(item.id); addProductToBasket(item.id) }}>Добавить в корзину</button>
          </div>
        </li>
      </>
    )
  )
}

export default SortedItemListById