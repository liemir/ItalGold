import React from 'react';

const Footer = () => {
    return (
        <div className="footer-content">
            {/* <p className='footerdescr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p className='footerdescr2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
            {/* <img className='footer-img2' src="/location2" alt="location" /> */}
            {/* <p className='footer-img-descr2'>Адрес:Бишкек.ул.Шопакова, 91</p> */}
            <div className='footer-img'>
            <img className='footer-img' src="/index.jpeg"/>
            </div>
            <ul className='social'>
                <li><a href='tel:+996551088800'><img src="/footer.png/phone" alt="phone" /></a></li>
                <li><a href='https://www.instagram.com/italgold.kg/'><i className='fa fa-facebook'><img src="/footer.png/facebook" alt="facebook" /></i></a></li>
                <li><a href='https://www.instagram.com/italgold.kg/'><i className='fa fa-instagram'><img src="/footer.png/instagram" alt="instagram" /></i></a></li>
                <li><a href='https://t-do.ru/emirzazazov'><i className='fa fa-telegram'><img src="/footer.png/telegram" alt="telegram" /></i></a></li>
                <li><a href='https://www.instagram.com/italgold.kg/'><i className='fa fa-twitter'><img src="/footer.png/twiiter" alt="twitter" /></i></a></li>
                <li><a href='mailto:jokerwertube@gmail.com'><i className='fa fa-email'><img src="footer.png/email" alt="email" /></i></a></li>
            </ul>
        </div>
    );
};

export default Footer;