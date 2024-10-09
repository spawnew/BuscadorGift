import { useState } from 'react';

const AddCategory = ({ setcategories }) => {
  const [input, setInput] = useState('');

  const addCategoria = (e) => {
    setInput(e.target.value); 
  };

  const submit = (e) => {
    e.preventDefault(); 

    if (input.trim().length > 1) {
      setcategories(input.trim()); 
      setInput(''); 
    }
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="Coloque una categoría"
        onChange={addCategoria}
        value={input}
      />
    </form>
  );
};

export default AddCategory;