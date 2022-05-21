import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Wrapper from './components/wrapper';
import Footer from './components/footer';
import React, {useState} from 'react';
import Drawer from './components/drawer';
import axios from 'axios'
import Search from './components/Search';
import Login from './pages/Login/Login'
import Register from './pages/Login/Register';
import { Button } from '@mui/material';
import "./Adaptive.css"
import Overlay from './components/Cardimg';
import CardImg from './components/Cardimg'
import { Link } from 'react-router';

export const AppContext = React.createContext({});



function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems, ] = useState([])
  const [cartOpened, setCartOpened] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false)
  const [imgOpen, setImgOpen] = useState(false)
  const [drawerItems, setDrawerItems] = useState([])
  const [registerOpen, setRegisterOpen] = useState(false)
  const [deleteOrder, setDeleteOrder] = useState(false)
  const [cardOpen, setCardOpened] = useState(false)
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [newArr , setNewArr] = useState([])
  
  // const [appContext, setAppContext] = useState([])




  const attuneItems =async () => {
    await axios.get("https://622ef24d3ff58f023c113748.mockapi.io/itemsForSelling")
    .then(res => {setItems(res.data)})
  }
  const onRemoveItem = (items) => {
    setCartItems((prev) => prev.filter((obj) => obj.items === items));
  }

  
  const removeDrawerObject =async (identifier) => {
   const objId = await  drawerItems.indexOf(drawerObject => drawerObject.title == identifier)
   console.log('this is identifier ', identifier)
   console.log('this is object Supposed Id' , objId)
   const renewedArr = drawerItems.filter(data => data.title != identifier)
   setDrawerItems(renewedArr)
   console.log(drawerItems)
   
  }
  
// = variable ; == unstrict equality ; === strict equality
  attuneItems()
  const handleDrawerAdd = (drawerItem) => {
      drawerItems.push(drawerItem)
  }
  const checkthatThing = () => {
    console.log(drawerItems)
  }
  // const onRemoveItem = (id) => {
  //   try {
  //     axios.delete(`https://622ef24d3ff58f023c113748.mockapi.io/itemsForSelling'${id}`);
  //     setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  //   } catch (error) {
  //     alert('Ошибка при удалении из корзины');
  //     console.error(error);
  //   }
  // };
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };


  return (
   <AppContext.Provider value={{items, cartItems}}>
      <body>
    <div className="App wrapper">
     {cartOpened && <Drawer removeFunction={removeDrawerObject}  items={drawerItems} onClose={() => setCartOpened(false)} /*onRemove={onRemoveItem}*/ /> }
     {loginOpen && <Login onClose={() => setLoginOpen(false)}/> }
     {registerOpen && <Register onClose={() => setRegisterOpen(false)}/>}
       <Header onClickCart={() => setCartOpened(true)} onClickLogin={() => setLoginOpen(true)} onClickRegister={() => setRegisterOpen(true)} onClickCard={() => setCardOpened}  />

       

       <Search
       items={items}
       cartItems={cartItems}
       searchValue={searchValue}
       setSearchValue={setSearchValue}
       onChangeSearchInput={onChangeSearchInput}
       isLoading={isLoading}
       />
      <Wrapper className="sometimesillfixit" drawerAdd = {handleDrawerAdd} items = {items} cartItems = {cartItems} setCartItems = {setCartItems}/>
      <Footer/>
    </div>
    </body>
   </AppContext.Provider>
  );
}


export default App;

{/* 
       <div className='slider'>
       <div className='Middle'>

         <div className='slides'>
           <input type="radio" name="r" id="r1" checked/>
           <input type="radio" name="r" id="r2" />
           <input type="radio" name="r" id="r3" />
           <input type="radio" name="r" id="r4" />


           <div className='slide'><img src="/img/sneakers/17" alt=""/></div>
           <div className='slide'><img src="/img/sneakers/18" alt=""/></div>
           <div className='slide'><img src="/img/sneakers/19" alt=""/></div>
           <div className='slide'><img src="/img/sneakers/20" alt=""/></div>


         </div>


         <div className='navigation'>
           <label for="r1" className='bar'></label>
           <label for="r2" className='bar'></label>
           <label for="r3" className='bar'></label>
           <label for="r4" className='bar'></label>
         </div>
       </div>
       </div> */}

      //  const attuneItems =async () => {
      //   await axios.get("https://622ef24d3ff58f023c113748.mockapi.io/itemsForSelling")
      //   .then(res => {setItems(res.data)})
      // }
      