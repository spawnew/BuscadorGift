
import React, { useEffect, useState } from 'react';
import '../Componentes/gif.css'
export const Gift = ({ categorias }) => {
  const [gif ,setgif]=useState([])
  
  
  const UrlGift = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=vyCDtn5GNrvUX3bAUTuP4mQfXkszVpOs&q=${categorias}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data);
    setgif(data)
  };

  useEffect(() => {
    UrlGift(); 
  }, [categorias]); 
  
  return (
    <div className='container-gif'>
      {gif.map(gifo=>{
        return (
          <div className='gif'>
        <h1>{gifo.title}</h1>
       <img src={gifo.images.downsized_medium.url} alt="20" />
          </div>        


        )
      })}
    </div>
  );
};