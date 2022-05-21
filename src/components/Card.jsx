import React, { useState } from "react";
import {Button, Link} from '@mui/material'




function Card(props){
  const [isAdded, setIsAdded] = React.useState(false);
  const [drawerObject, setDrawerObject] = useState({})

  const onClickPlus =async () => {
    const object = {
      title: props.title,
      imageUrl: props.imageUrl,
      price: props.price
    }
    setIsAdded(!isAdded);
    props.drawerAdd(object)
    console.log(drawerObject)
    setStateOrdered(true)
  };
  const [stateOrdered, setStateOrdered] = useState(false)
  
  const [open, setOpen] = useState(false)



  


    return(
         <div className="CARD">
        <div className="card">

        <img  className="card-img" src={props.imageUrl} alt=""/>
         <div className="carddescr">
           <p>{props.title}</p>
             <h5>Цена:</h5>
             <b>{props.price} som</b>
          
           </div>
         <div className="cardBottom">
            {stateOrdered ? <img style={{"width" : "20px"}} src="/галочка.png"/> : <img src="/плюс.png" onClick={onClickPlus} style={{"width" : "20px"}}/>}
            <img imageUrl=''/>
         </div>
       </div>
       </div>
     
    );
}
export default Card;