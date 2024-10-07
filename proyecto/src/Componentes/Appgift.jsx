import React from 'react'
import { useState } from 'react'


const Appgift = () => {
    const [categoria, setcategoria]=useState(["naruto","pokemon"])
  
  
  const addcategory= ()=>{
    setcategoria(...categoria+"yugioh")
  }
  
  
  // ...categoria agarra todo el array y le agrega yugioh
  
  
    return (
    <div>


<button onClick={addcategory}>tocar</button>

{categoria.map(category =>{

    return <div><h1>{category}</h1>    </div>

})

}


    </div>
  )
}

export default Appgift;