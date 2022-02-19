import React from 'react'
import { PhoneItem } from '../../components/phone-item/phone-item.js'
import './home-page.css'

const PHONES = [
  {
    image: 'https://eppl.store/image/catalog/%20%D0%B4%D0%BB%D1%8F%20iPad/iPhone%2013/iPhone%2013%20Pro/iphone-13-pro-max-graphite-select.png',
    title: 'Iphone 13 PRO MAX 128gb',
    price: 1500,
    id: 1,
    video: '',
    descrotion: '',
  },
  {
    image: 'https://eppl.store/image/catalog/%20%D0%B4%D0%BB%D1%8F%20iPad/iPhone%2013/iPhone%2013%20Pro/iphone-13-pro-max-gold-select.png',
    title: 'Iphone 12 PRO MAX 256gb',
    price: 1000,
    id: 2,
    video: '',
    descrotion: '',
  },
  {
    image: 'https://eppl.store/image/catalog/products/1141a.png',
    title: 'Iphone 13 mini 64gb',
    price: 1200,
    id: 3,
    video: '',
    descrotion: '',
  },
  {
    image: 'https://eppl.store/image/catalog/products/1141a.png',
    title: 'Iphone 11 128gb',
    price: 1000,
    id: 4,
    video: '',
    descrotion: '',
  },
  {
    image: 'https://eppl.store/image/catalog/%20%D0%B4%D0%BB%D1%8F%20iPad/iPhone%2013/iPhone%2013%20Pro/iphone-13-pro-max-gold-select.png',
    title: 'Iphone 13 PRO MAX 126gb',
    price: 1200,
    id: 5,
    video: '',
    descrotion: '',
  },
  {
    image: 'https://eppl.store/image/catalog/%20%D0%B4%D0%BB%D1%8F%20iPad/iPhone%2013/iPhone%2013%20Pro/iphone-13-pro-max-graphite-select.png',
    title: 'Iphone 13 PRO MAX 1tb',
    price: 2000,
    id: 6,
    video: '',
    descrotion: '',
  },
  {
    image: 'https://eppl.store/image/catalog/%20%D0%B4%D0%BB%D1%8F%20iPad/iPhone%2013/iPhone%2013%20Pro/iphone-13-pro-max-gold-select.png',
    title: 'Iphone 13 PRO MAX 256gb',
    price: 1500,
    id: 7,
    video: '',
    descrotion: '',
  },
  {
    image: 'https://eppl.store/image/catalog/%20%D0%B4%D0%BB%D1%8F%20iPad/iPhone%2013/iPhone%2013%20Pro/iphone-13-pro-max-graphite-select.png',
    title: 'Iphone 13 PRO MAX 512gb',
    price: 1900,
    id: 8,
    video: '',
    descrotion: '',
  },
  {
    image: 'https://eppl.store/image/catalog/%20%D0%B4%D0%BB%D1%8F%20iPad/iPhone%2013/iPhone%2013%20Pro/iphone-13-pro-max-gold-select.png',
    title: 'Iphone 13 PRO MAX 126gb',
    price: 1400,
    id: 9,
    video: '',
    descrotion: '',
  },
  {
    image: 'https://eppl.store/image/catalog/%20%D0%B4%D0%BB%D1%8F%20iPad/iPhone%2013/iPhone%2013%20Pro/iphone-13-pro-max-gold-select.png',
    title: 'Iphone 13 PRO MAX 512gb',
    price: 1700,
    id: 10,
    video: '',
    descrotion: '',
  },
  {
    image: 'https://eppl.store/image/catalog/%20%D0%B4%D0%BB%D1%8F%20iPad/iPhone%2013/iPhone%2013%20Pro/iphone-13-pro-max-graphite-select.png',
    title: 'Iphone 13 PRO MAX 1tb',
    price: 2000,
    id: 11,
    video: '',
    descrotion: '',
  },
  {
    image: 'https://eppl.store/image/catalog/%20%D0%B4%D0%BB%D1%8F%20iPad/iPhone%2013/iPhone%2013%20Pro/iphone-13-pro-max-gold-select.png',
    title: 'Iphone 13 PRO MAX 512gb',
    price: 1700,
    id: 12,
    video: '',
    descrotion: '',
  },
];

export const HomePage = () => {
  return (
    <div className='home-page'>
        { PHONES.map(phone => <PhoneItem phone={ phone } key={ phone.id } />) }
    </div>
  )
}
