import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TaskIcon from '@mui/icons-material/Task';
import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';

interface Props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: ()=>void
}
const InputField = ({todo , setTodo, handleAdd}:Props) => {
  return (
    <Box sx={{ background:'white', borderRadius:'15px', width:'70%'}}>
      <FormControl variant="standard" sx={{display:'flex',flexDirection:'row', marginLeft:'15px',width:'100%'}}>
        <InputLabel sx={{fontWeight:'bold'}}>
          Add Task
        </InputLabel>
        <Input sx={{width:'90%'}}
          value={todo}
          onChange={(e)=>setTodo(e.target.value)}
          startAdornment={
            <InputAdornment position="end">
              <TaskIcon />
            </InputAdornment>
          }
        />
        <Button onClick={handleAdd} type="submit" className='addbtn'><Add sx={{fontSize:'30px'}}/></Button>
      </FormControl>
    </Box>
  );
}

export default InputField
