import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our Products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img.jpg'
              text='Twist steel Mop'
              label='Twist steel Mop'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Toilet Brush'
              label='Luxury'
              path='/services'
            />
             <CardItem
              src='images/img-1.jpg'
              text='Twist Mop'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Mexican Mop'
              label=''
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Garbage Bags '
              label='Disposal'
              path='/products'
            />
            <CardItem
              src='images/img-5.jpg'
              text='5 Step Nice Steel Handle broom'
              label='Cleaning'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
