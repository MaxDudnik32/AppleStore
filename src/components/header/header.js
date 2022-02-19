import React from 'react';
import { Link } from 'react-router-dom';
import { CartBlock } from '../cart-block/cart-block.js'
import './header.css';

export const Header = () => {
  return (
    <div className='header'>
        <div className='wrapper'>
            <Link className='home-cart' to="/">AppleStore</Link>
        </div>
        <CartBlock />
    </div>
  )
}
