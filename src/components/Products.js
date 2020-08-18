import React from 'react'
import SearchBar from './SearchBar'
import ProductsList from './ProductsList'
import SearchTags from './SearchTags'

function Products({ sortedItemsById, searchedItems, onSearch, searched, products, filterItemsWithTags, addPriceInBasket, addProductToBasket }) {
  return (
    <>
      <main className="content">
        <div className="container">
          <div className="content-inner">
            <div className="content-column">
              <div className="content-column-inner">
                <SearchBar
                  sortedItemsById={sortedItemsById}
                  onSearch={onSearch}
                />
                <SearchTags
                  products={products}
                  filterItemsWithTags={filterItemsWithTags}
                />
              </div>
            </div>
            <ProductsList
              sortedItemsById={sortedItemsById}
              searchedItems={searchedItems}
              searched={searched}
              addPriceInBasket={addPriceInBasket}
              addProductToBasket={addProductToBasket}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Products