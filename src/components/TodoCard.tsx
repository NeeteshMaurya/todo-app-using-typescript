import CheckIcon from '@mui/icons-material/Check';
import CreateIcon from '@mui/icons-material/Create';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';
import TodoList from './TodoList';

interface Todo {
    id:number
    todos: string
    isDone: boolean
}
interface Props{
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoCard = ({todo, todos, setTodos}:Props) => {
    // const handleEdit =() =>{

    // }
    const handleDelete =(id:number) =>{
        setTodos(
            todos.filter((todo)=>
                todo.id !== id
            )
        )
    }
    const handleDone =(id:number) =>{
        setTodos(
            todos.map((todo)=>
            todo.id===id?{...todo, isDone:!todo.isDone} : todo
            ))
    }
  return (
    <div className='todocard' style={{justifyContent:'space-between',background:'yellow',display:'flex',flexDirection:'row',margin:'10px'}}>
        {todo.isDone ? <s style={{margin:'6px',fontSize:'20px'}}>{todo.todos}</s>
        : <span style={{margin:'6px',fontSize:'20px'}}>{todo.todos}</span>
        }
        <div style={{marginRight:'10px'}}>
            {/* <Button onClick={handleEdit}><CreateIcon style={{marginRight:'10px',marginTop:'4px'}} /></Button> */}
            <Button onClick={()=>handleDelete(todo.id)}><DeleteForeverIcon style={{marginRight:'10px'}} /></Button>
            <Button onClick={()=>handleDone(todo.id)}><CheckIcon style={{marginRight:'10px'}} /> </Button>
        </div>
    </div>
  )
}

export default TodoCard