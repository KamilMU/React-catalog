import React from 'react';
import Tabs from './components/Tabs';
import Products from './components/Products';
import Basket from './components/basket/Basket';
import { Route, Switch } from 'react-router-dom'
import './App.css';

let currentTab = 0
let previousTab = null

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { tabId: 1, tabName: 'Вкладка 1' },
        { tabId: 2, tabName: 'Вкладка 2' },
        { tabId: 3, tabName: 'Вкладка 3' },
        { tabId: 4, tabName: 'Вкладка 4' }
      ],
      products: [
        {
          id: 1,
          itemId: 2,
          itemName: 'Xiaomi Mi 2',
          price: 14191,
          imgUrl: 'https://avatars.mds.yandex.net/get-mpic/175985/img_id1857307587345150903/9hq'
        },
        {
          id: 2,
          itemId: 4,
          itemName: 'honor 20',
          price: 15000,
          imgUrl: 'https://avatars.mds.yandex.net/get-mpic/1863454/img_id3081200249868588103.jpeg/orig'
        },
        {
          id: 3,
          itemId: 3,
          itemName: 'Sumsung A50',
          price: 21000,
          imgUrl: 'https://static.beeline.ru/shop/media/goods/334x434/ccf90965-8a0e-4e8e-bc78-4520677ddfad.png'
        },
        {
          id: 4,
          itemId: 2,
          itemName: 'Xiaomi 3',
          price: 5000,
          imgUrl: 'https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2016/06/17/source-img/20160617143044_21695.jpg_500x500.jpg'
        },
        {
          id: 5,
          itemId: 1,
          itemName: 'Iphon 4S',
          price: 8000,
          imgUrl: 'https://static-ru.insales.ru/images/products/1/7922/133201650/4s_black.jpg'
        },
        {
          id: 6,
          itemId: 1,
          itemName: 'Ipad Mini',
          price: 28000,
          imgUrl: 'https://avatars.mds.yandex.net/get-mpic/1591646/img_id8351452747493086561.jpeg/orig'
        },
        {
          id: 7,
          itemId: 3,
          itemName: 'Sumsung A30',
          price: 18000,
          imgUrl: 'https://shop.mts.ru/upload/iblock/ab4/smartfon_samsung_a305_galaxy_a30_3_32gb_white.jpg/resize/470x470/'
        },
        {
          id: 8,
          itemId: 2,
          itemName: 'Xiaomi Mi 6',
          price: 14191,
          imgUrl: 'https://sintetiki.net/images/product/1826/33/Xiaomi-Mi6-Blue.png'
        },
        {
          id: 9,
          itemId: 4,
          itemName: 'honor 9 lite',
          price: 12000,
          imgUrl: 'https://shop.mts.ru/upload/iblock/8d7/smartfon_honor_9_lite_blue.jpg/resize/470x470/'
        },
        {
          id: 10,
          itemId: 1,
          itemName: 'Apple Iphon 5S',
          price: 14000,
          imgUrl: 'https://static.onlinetrade.ru/img/items/m/apple_iphone_5s_16gb_space_gray_1.jpg'
        },
        {
          id: 11,
          itemId: 1,
          itemName: 'Apple Iphon 7',
          price: 34191,
          imgUrl: 'https://img.mvideo.ru/Pdb/30026136b.jpg'
        },
        {
          id: 12,
          itemId: 2,
          itemName: 'Xiaomi Mi 8',
          price: 24191,
          imgUrl: 'https://www.coxo.ru/upload/iblock/0f3/8c47e99a_86de_11e9_811f_00155dc86402_8c47e99b_86de_11e9_811f_00155dc86402.resize1.jpg'
        }
      ],
      sortedItemsById: [],
      searchedItems: [],
      basketProducts: [],
      basket: 0,
      searched: false
    }
  }

  componentDidMount() {
    if (parseInt(this.state.basket)) {
      this.setState({
        basket: this.getItemFromStorage()
      })
    }
  }

  updateLocalStorage = () => {
    let basket = JSON.stringify(this.state.basket)
    localStorage.setItem('basket', basket)
  }

  getItemFromStorage = () => {
    return parseInt(localStorage.getItem('basket'))
  }

  addProductToBasket = productId => {
    console.log(this.state.basketProducts)
    this.state.products.map(item => {
      if (item.id === productId) {
        return this.setState({ 
          basketProducts: [...this.state.basketProducts, {...item, id: Date.now() }] 
        })
      }
    })
  }

  deleteProductfromBasket = productId => {
    this.setState({
      basketProducts: this.state.basketProducts.filter(basketProduct => basketProduct.id !== productId)
    })
  }

  deletePriceFromBasket = (productId) => {
    this.state.basketProducts.map(item => {
      console.log(typeof this.state.basket)
      if (item.id === productId) {
        this.setState({
          basket: this.state.basket - item.price
        })
      }
    })
  }

  deleteProductAndPriceFromBasket = (productId) => {
    this.deletePriceFromBasket(productId)
    this.deleteProductfromBasket(productId)
  }

  addPriceInBasket = itemId => {
    let basket = this.state.basket
    this.state.products.map(item => {
      if (item.id === itemId) {
        return this.setState({ basket: basket + item.price }, () => this.updateLocalStorage())
      }
    })
  }

  filterItemsWithTags = currentTag => {
    const filteredItems = this.state.sortedItemsById.filter(item => item.itemId === currentTag)
    this.setState({
      searchedItems: filteredItems,
      searched: !this.state.searched
    })
  }

  searchItemFromArray = text => {
    let filteredItemsByName = this.state.sortedItemsById.filter(item => item.itemName.toString().toLowerCase().search(text.toLowerCase()) !== -1 || '')
    this.setState({
      searchedItems: filteredItemsByName,
      searched: !this.state.searched
    })
  }

  sortArrayByCategory = e => {
    const selectedTab = e.target.tabIndex
    currentTab = previousTab
    if (currentTab !== selectedTab) {
      currentTab = selectedTab
    }
    const clickedTab = this.state.products.filter(item => item.itemId === selectedTab)
    this.setState({
      sortedItemsById: clickedTab
    })
  }

  render() {
    return (
      <div className="wrapper">
        <header className="header">
          <div className="header-container">
            <div className="header-inner">
              <Tabs
                tabs={this.state.tabs}
                sortArrayByCategory={this.sortArrayByCategory}
                basket={this.state.basket}
              />
            </div>
          </div>
        </header>
        <Switch>
          <Route path='/tabs'>
            <Products
              products={this.state.products}
              sortedItemsById={this.state.sortedItemsById}
              sortArrayByCategory={this.state.sortedItemsById}
              onSearch={this.searchItemFromArray}
              searchedItems={this.state.searchedItems}
              searched={this.state.searched}
              filterItemsWithTags={this.filterItemsWithTags}
              addPriceInBasket={this.addPriceInBasket}
              addProductToBasket={this.addProductToBasket}
            />
          </Route>
          <Route path='/basket'>
            <Basket
              basketProducts={this.state.basketProducts}
              onDelete={this.deleteProductAndPriceFromBasket}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
