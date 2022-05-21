import axios from 'axios';
import React, { useState } from 'react';
import Card from './Card';
import Search from './Search';


// const [imgOpen, setImgOpen] = useState(false);

const Sneakers = (props) => {

  const onAddToCard = (obj) =>{
   if (props.cartItems.find((item) => item.id === obj.id)){
     props.setCartItems(prev => prev.filter(item => item.id  === obj.id));
   }
  };

    

    return (

         
         <div className="sneakers">
       {/* {SearchValue ? {props.items.filter(item => item.title => searchValue) */}
        {props.items
        /* .filter((item) => item.title.toLowerCase().includes(props.searchValue))*/
        .map ((item, index) => (
        
          <Card 
          drawerAdd = {props.drawerAdd}
          key={index}
          title={item.title} 
          price={item.price}
          imageUrl={item.imageUrl}
          onPlus={(obj) => console.log(obj)}
          />
        ))}
         </div>
    );
};

export default Sneakers;