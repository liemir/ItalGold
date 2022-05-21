import React from 'react';
import axios from 'axios';



const Cardimg = (props) => {
    return (
        <div className='Card-image'>
            <div className='overlay'>
             <div className="card">

<img  className="card-img" src={props.imageUrl} alt=""/>
</div>
   </div>
        </div>
    );
};

export default Cardimg;