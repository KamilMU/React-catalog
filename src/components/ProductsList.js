import React from 'react';
import SortedItemListById from './SortedItemListById'
import SearchedItemList from './SearchedItemList'

function ProductsList({ sortedItemsById, searchedItems, searched, addPriceInBasket, addProductToBasket }) {
  return (
    <>
      <ul className="products-container">
        {searched ?
          <SearchedItemList searchedItems={searchedItems} addPriceInBasket={addPriceInBasket} addProductToBasket={addProductToBasket} /> :
          <SortedItemListById sortedItemsById={sortedItemsById} addPriceInBasket={addPriceInBasket} addProductToBasket={addProductToBasket} />
        }
      </ul>
    </>
  )
}

export default ProductsList;