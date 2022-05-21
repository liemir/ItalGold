import { Button } from '@mui/material';
import React from 'react';
import {useState} from 'react'
import { AppContext } from '../App';
import axios from 'axios';
import { useSelector } from 'use-selector';
function Drawer({isLoading,  onClose, items = [], removeFunction})  {

  const { cartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum,   obj) => obj.price + sum, 60000);

  const [drawerArr, setDrawerArr] = useState([])
  const handleItemClose = (e) => {
    const identifier = e.target.id
    removeFunction(identifier)
  }
  const removeObject = (title) => {
    removeFunction(title)
    console.log(title)
  }
  const handleClick = () => {
    console.log('hello')
  }
    return (
        <div  className="overlay">
        <div className="drawer" >
          <h2>Корзина  <img onClick={onClose}  className="removeBtn" width={18} height={18} src="/remove.png" alt="remove"/></h2>
    
         <div className='items'>
    {items.map((items) => {
      
      
      const objectTitle = items.title
      return(
       <div className="cartItem">
         <div className="cartItem-descr">
         <img onClick={() => onpointermove(items.id)} id={items.title} onClick={handleItemClose} className="remove-button" /*onClick={() => {removeObject(objectTitle)}}*/  width={15} height={18} src="/remove.png" alt="remove"/>
          
           <div   style={{ backgroundImage: `url(${items.imageUrl})` }}
           className="cartItemImg">
               
            
             
           </div>
           <div className='cardItemDescr-pb'>
             
           <p>{items.title}</p>
              <b>{items.price} som</b></div>
           </div>
          </div>

          
    )})}
      
        
          </div>
         <div className='total-block'>
   <ul>
     <li className='total'>
       <span >Итого:</span>
       <div></div>
       <b>{totalPrice} сом.</b>
     </li>
     <li className='nalog'>
       <span>налог 5%:</span>
       <div></div>
       <b>{(totalPrice / 100) * 5} сом. </b>
     </li>
   </ul>
   <button distabled={isLoading} className="greenButton">
     <h1 className='total-descr'>Оформить заказ</h1> <img className='arrow' src='/arrow.png' alt='Arrow'/>
   </button>

           </div>
    
      
        </div>
        </div>
    );
};

export default Drawer;
// (
//   <div className="cartItem">
//     <div className="cartItem-descr">
//     <img className="remove-button" onClick={removeObject} width={18} height={18} src="/remove.png" alt="remove"/>
//       <div
//       className="cartItemImg">
//          <p>{items.title}</p>
//          <b>{items.price} som</b>
//         <img href={items.imageUrl}/>
//       </div>
//       </div>
//      </div>

     
// )