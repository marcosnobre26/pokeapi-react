import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
const Demo = () => {
    
        return (
            <Carousel>
                <div>
                    <img src="https://pokemongolive.com/img/posts/gobattleleague-announcement-2.jpg" />
                    
                </div>
                <div>
                    <img src="https://observatoriodegames.uol.com.br/wp-content/uploads/2020/03/Pokemon-GO-BL.jpg" />
                    
                </div>
                <div>
                    <img src="https://observatoriodegames.uol.com.br/wp-content/uploads/2020/09/Pokemon-Go-Mega-Evolutions.jpg" />
                    
                </div>
            </Carousel>
        );
    
}

export default Demo;