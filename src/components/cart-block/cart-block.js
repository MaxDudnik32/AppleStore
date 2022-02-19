import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CartMenu } from '../cart-menu/cart-menu.js'
import { ItemsInCart } from '../items-in-cart/items-in-cart.js'
import { calcTotalPrice } from '../utils.js'
import './cart-block.css'

export const CartBlock = () => {
  const [isCartMenuVisible, setCartMenuVisible] = useState(false);
  const items = useSelector(state => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className='header-cart-wrapper'>
        <ItemsInCart quantity={ items.length } />
        <AiOutlineShoppingCart className='header-cart' onClick= { () => setCartMenuVisible(!isCartMenuVisible) } />
        { totalPrice > 0 ? <span className='total_price'> { totalPrice } $</span> :null }
        { isCartMenuVisible && <CartMenu items={ items }/> }
    </div>
  )
}
