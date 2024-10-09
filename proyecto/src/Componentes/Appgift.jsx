import React, { useState } from 'react';
import AddCategory from '../Componentes/AddCategory';
import { Gift } from './Gift';
import '../Componentes/gif.css'

const Appgift = () => {
  const [categoria, setCategoria] = useState([]);

  const addCategoria = (newCategory) => {
    if (categoria.includes(newCategory)) return; 

    setCategoria([...categoria, newCategory]); 
  };

  return (
    <div>
        <h1>Busque su gift </h1>
      <AddCategory setcategories={addCategoria} />

      {categoria.map((category) => (
        <Gift categorias={category} key={category} />
      ))}
    </div>
  );
};

export default Appgift;