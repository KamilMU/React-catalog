import React from 'react'

function SearchedItemList({ searchedItems, addPriceInBasket, addProductToBasket }) {
  return (
    <ul className="products-container">
      {searchedItems.map(item =>
        <li className="products-container__item"  key={item.id}>
          <div className="products-container__item-img"><img src={item.imgUrl} alt="" /></div>
          <div className="products-container-item-wrapper">
            <span className="products-container__item-name">{item.itemName}</span>
            <div>{`${item.price} руб.`}</div>
            <button className="products-container__item-btn" onClick={() => { addPriceInBasket(item.id); addProductToBasket(item.id) }}>Добавить в корзину</button>
          </div>
        </li>
      )}
    </ul>
  )
}

export default SearchedItemList

