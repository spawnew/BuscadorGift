import React from 'react'
import { useState } from 'react'
import AddCategory from '../Componentes/AddCategory'

const Appgift = ({setcategory}) => {
    const [categoria, setcategoria]=useState(["naruto","pokemon"])
  
  
 
 
  // ...categoria agarra todo el array y le agrega yugioh
  
  
    return (
    <div>

<AddCategory setcategories={setcategoria} />


{categoria.map(category =>{

    return <div><h1>{category}</h1>    </div>

})

}


    </div>
  )
}

export default Appgift;