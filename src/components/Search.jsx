import React from 'react';
import Card from '../components/Card'

 
function Search (props) {
     const renderItems = () => {
       const filtredItems = props.items.filter((item) =>
         item.title.toLowerCase().includes(searchValue.toLowerCase()),
       );
       return (props.isLoading ? [...Array(11)] : filtredItems).map((item, index) => (
         <Card 
         drawerAdd = {props.drawerAdd}
         key={index}
         title={item.title} 
         price={item.price}
         imageUrl={item.imageUrl}
         onPlus={(obj) => console.log(obj)}
         />
       ));
     };
     const [searchValue, setSearchValue] = React.useState('');

    
 const onChangeSearchInput = (event) => {
     setSearchValue (event.target.value);
  }
 
    return (
        <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1 className='Search-block-descr'>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все аксессуары'}</h1>
        <div className="search-block">
          <img className='search-img' src="Search.png" width={15} height={15} alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="clear"
              width={15}
              height={15}
              src="/remove.png"
              alt="Clear"
            />
          )}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
        </div>
      </div>
      <div className="d-flex flex-wrap">{props.renderItems}</div>
    </div>
    );
};
export default Search;

// {searchValue == '' ? renderAllitems : renderSearchedItems} 
