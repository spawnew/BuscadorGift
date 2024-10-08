import  { useState } from 'react'

const AddCategory = ({setcategories}) => {
  
  const [input,setinput]=useState("")
  
  
 const addCategoria=(e)=>{

   setinput(e.target.value)
   

 }
//metodo para eliminar espacios
 const submit=(e)=>{
   if(input.trim()> 1){

     e.preventDefault();
     setcategories(input.trim())
    setinput('')
    // llamamo a setinput para limpiar el input
   } 
   
    }
     
   
  
  
    return (
        

      
    <form onSubmit={submit} >

   <input type="text" 
   placeholder='coloque una categoria'
   onChange={addCategoria}
   value={input}
   />


    </form>
     
    
  )
}

export default AddCategory;