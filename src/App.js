import React from 'react';
import './App.css';
import { useState } from 'react';
import TodoForm from './components/TodoForm'
import Typography from '@material-ui/core/Typography';
import TodoList from './components/TodoList';


const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Typography variant="h2">
        Bugün Neler Yapıyoruz?
      </Typography>

      <TodoForm
  saveTodo={(todoText) => {
    const trimmedText = todoText.trim();

    if (trimmedText.length > 0) {
      setTodos([...todos, trimmedText]);
    }
  }}
/>

<TodoList
  todos={todos}
  deleteTodo={(todoIndex) => {
    const newTodos = todos.filter((_, index) => index !== todoIndex);

    setTodos(newTodos);
  }}
/>
    </div>
  );
};
export default App;
