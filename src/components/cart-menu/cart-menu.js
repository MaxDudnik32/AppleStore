import React, { useState } from 'react'
import { calcTotalPrice } from '../utils.js'
import { CartItem } from '../cart-item/cart-item.js'
import './cart-menu.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { HomePage } from '../../pages/home-page/home-page.js'

const MySwal = withReactContent(Swal)

export const CartMenu = ({ items }) => {
  let isCartMenuVisible = true

  const finishOrder = () => {
    MySwal.fire({
        icon: 'success',
        title: 'Congratulation',
        text: 'Your order have done!'
    })
  }

  if(isCartMenuVisible === true) {
    return (
    <div id='cart-menu' className='cart-menu'>
        <div className='cart-menu-game-list'>
            {
                items.length > 0 ? items.map(phone => <CartItem title={phone.title} price={phone.price} id={phone.price}/>) : "Cart is empty"
            }
        </div>
        {
            items.length > 0 ?
            <div className='cart-menu-arrange'>
                <div className='cart-menu-total-price'>
                    <span>Total Price:</span>
                    <span>{ calcTotalPrice(items) }$</span>
                </div>
                <div className='cart-menu-order' onClick={ finishOrder }>
                    Finish order
                </div>
            </div>
            : null
        }
    </div>
  )
  } else {
      alert('WTF!')
  }
}
