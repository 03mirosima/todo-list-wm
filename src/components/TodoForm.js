import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';


const TodoForm = ({ saveTodo }) => {
  const [value, setValue] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        saveTodo(value);
        setValue('');
      }}
    >
      <TextField 
        className="textfield light"
        variant="outlined"
        placeholder="Yapılacak İşler"
        margin="normal"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        //Textfield boşalması için
        value={value}
      />
    </form>
  );
};

export default TodoForm;