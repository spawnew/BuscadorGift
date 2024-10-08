import React from 'react'
import { useState } from 'react'
import AddCategory from '../Componentes/AddCategory'

const Appgift = () => {
    const [categoria, setcategoria]=useState(["naruto","pokemon"])
  
  
 
 
const addCategoria =(setcategories)=>{
    setcategoria([...categoria,setcategories])
}
  
  
    return (
    <div>

<AddCategory setcategories={addCategoria} />


{categoria.map(category =>{

    return <div><h1>{category}</h1>    </div>

})

}


    </div>
  )
}

export default Appgift;