import { useEffect, useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import Switch from '@mui/material/Switch';

interface Todo {
  id:number
  todos: string
  isDone: boolean
}
const App:React.FC = () => {
  
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  //theme
  const [theme, setTheme] = useState<string>("light-theme")
  const toggleTheme = () => {
    if(theme==="light-theme"){
      setTheme("dark-theme")
    }else{
      setTheme("light-theme")
    }
  }
  useEffect(()=>{
    document.body.className = theme
  },[theme])

  const handleAdd = () => {
    if(todo){
      setTodos([...todos, {id:Date.now(),todos:todo,isDone:false}])
      setTodo("")
    }
  }
  console.log(todos)
  return (
    <div className="App">
      <span className="heading" >ToDo App</span>
      <Switch onClick={toggleTheme} />
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>

  );
}

export default App;
