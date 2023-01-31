import React from 'react';
import '../styles/Card.css';

export function Card(prop) {

  var TextCont;
  
  if (prop.icon){

    switch(prop.text[0]['iconContent'].type){
      
      case ('skill'): TextCont = () => prop.text.map((item, index) => {

                                                              return <div key={index} className='skill-container'><span className='span-skill'><strong> {item['bold']} </strong> <br /> </span> <div className='empty-skill'><div className={'level-skill ' +item['iconContent'].level}></div></div></div>;
                                                            });
                    break;
    }
      
   

  } else if (prop.text.length === 1){

   TextCont = () => {return <p className='cardText'>{prop.text[0].extra}</p>}

  } else if (prop.text.length >= 2){

    TextCont = () => prop.text.map((item, index) => {

                                      return <p className='cardText' key={index}><span><strong> {item['bold']} </strong> <i>{item['italic']}</i> {!item['extra'] ? "" :  item['extra']}<br /> </span></p> ;
                                    });
                
  } 
  
  return (
    <div className='card'>

      <h2 className="cardTitle">{prop.title}</h2>
   
        
        
        <TextCont />
      
      
      
      
      
    </div>
  );
}