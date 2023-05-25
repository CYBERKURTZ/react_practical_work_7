import React from 'react'
import Slider from './Slider';
import CardItem from './cart/CartItem';

const Home = (props) => {
  return (
    <div>
      <Slider></Slider>
      <CardItem
      item={props.item}
      overlayItems={props.overlayItems}
      setOverlayItems={props.setOverlayItems}
      favorites={props.favorites}
      setFavorites={props.setFavorites}
      />
    </div>
  )
}

export default Home
