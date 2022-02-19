import React from 'react'
import './phone-cover.css'

export const PhoneCover = ({ image }) => {
  return (
    <div className='phone-cover' style={{backgroundImage: `url(${image})`}}></div>
)
}