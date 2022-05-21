import React from 'react';
import { useState } from 'react';
import { ItemsInCart } from './items-in-cart';



function Header(props)  {




  const [open, setOpen] = useState(false)
    return (
        <header>
   
        <div className="headerinfo">
          <h3>Ital Gold</h3>
          <p>Магазин лучших аксессуаров</p>
      </div>
      <ul className="header-ul">
        <li onClick={props.onClickCart} className="header-li" >
        <ItemsInCart quatity={props.items} />
        
          <img width={18} height="18" src="/logo192.png"/>
          <span></span>
        </li>
        <li onClick={props.onClickLogin}  className='header-acc'>
          <img width={18} height="18" src="user.png"/>
        </li>
        <li onClick={props.onClickRegister} className='header-reg'>
          <img  width={18} height="18"  src="register"/>
        </li>
      </ul>
    </header>
    );
};

export default Header;