import React from 'react'
import { PhoneCover } from '../phone-cover/phone-cover.js'
import { PhoneBuy } from '../phone-buy/phone-buy.js'
import './phone-item.css'

export const PhoneItem = ({ phone }) => {
  return (
    <div className='phone-item'>
      <PhoneCover image={phone.image} />
      <div className='phone-item-details'>
        <span className='phone-item-title'>{ phone.title }</span>
        <div className='phone-item-but'>
          <PhoneBuy phone={phone} />
        </div>
      </div>
    </div>
  )
}
