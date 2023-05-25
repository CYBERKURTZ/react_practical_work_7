import React from 'react'
import Item from './Item'
import axios from 'axios'

const CartItem = (props) => {

  //функция для добавления в корзину
  const onAddOverlay = async (obj)=>{
    try{
      const findOverlay = props.overlayItems.find(objOver=> objOver.myId === obj.myId)
      if(findOverlay){
        axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/cart/${findOverlay.id}`)
        props.setOverlayItems((over) => over.filter(o=>o.myId !== obj.myId))
      }else{
        const {data} = await axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart', obj)
        props.setOverlayItems([...props.overlayItems, data])
      }
    }catch{
      alert('Произошла ошибка')
    }
  }

  //функция для добавления в избранное
  const onAddFav = async (obj)=>{
    try{
      const findFavorites = props.favorites.find(objFav=> objFav.myId === obj.myId)
      if(findFavorites){
        axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites/${findFavorites.id}`)
        props.setFavorites((over) => over.filter(o=>o.myId !== obj.myId))
      }else{
        const {data} = await axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites', obj)
        props.setFavorites([...props.favorites, data])
      }
    }catch{
      alert('Произошла ошибка')
    }
  }

  return (
    <div className='conteiner py-3'>
      {props.item.map(obj=>
        {return(
          <Item
          key={obj.id}
          id={obj.id}
          myId={obj.myId}
          title={obj.title}
          description={obj.description}
          price={obj.price}
          img={obj.img}
          favBtn={
            (favObj)=>{
              onAddFav(favObj)
            }
          }
          onPlus={(cartObj)=>{onAddOverlay(cartObj)}}
          />
        )}
      )}
    </div>
  )
}
export default CartItem