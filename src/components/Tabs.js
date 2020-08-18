import React from 'react'
import { NavLink } from 'react-router-dom'

function Tabs({ tabs, sortArrayByCategory, basket }) {
  return (
    <>
      <nav className="header__tabs">
        <ul className="header__list">
          {tabs.map(tab =>
            <li onClick={sortArrayByCategory} key={tab.tabId}>
              <NavLink exact to="/tabs" tabIndex={tab.tabId} className="header__link" replace>{tab.tabName}</NavLink>
            </li>
          )}
        </ul>
      </nav>
      <div className="header__basket basket">
        <NavLink exact to="/basket" className="header__link" replace>
          <div className="basket__tittle">Корзина</div>
          <div className="basket__subtittle">{`Общая сумма в корзине: ${basket} руб.`}</div>
        </NavLink>
      </div>
    </>
  )
}

export default Tabs