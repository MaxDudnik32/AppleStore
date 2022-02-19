import React from 'react'
import { setItemInCart, deleteItemFromCart } from '../../redux/cart/reducer';
import { useDispatch, useSelector } from 'react-redux';
import './phone-buy.css'

export const PhoneBuy = ({phone}) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.itemsInCart)
  const isItemInCart = items.some(item => item.id === phone.id)

  const handleClick = (e) => { 
    e.stopPropagation()
    if( isItemInCart ) {
      dispatch(deleteItemFromCart(phone.id));
    } else {
      dispatch(setItemInCart(phone))
    }
  }

  return (
    <div className='phone-buy'>
        <span className='phone-buy-price'>{ phone.price }$ </span>
        <div className='phone-item-buy' onClick={ handleClick }>
          { isItemInCart ? 'Del': 'Buy' }
        </div>
    </div>
  )
}
