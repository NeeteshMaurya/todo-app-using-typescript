import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

interface Todo {
  id:number
  todos: string
  isDone: boolean
}
const App:React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

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
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
