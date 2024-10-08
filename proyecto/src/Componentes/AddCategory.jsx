import  { useState } from 'react'

const AddCategory = () => {
  
  const [input,setinput]=useState("")
  
  
 const addCategoria=(e)=>{

   setinput(e.target.value)
   

 }
 const submit=(e)=>{

    e.preventdefault();
    console.log(e.target.value)
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