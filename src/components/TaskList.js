import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask, toggleTask } from "../redux/tasksSlice";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEditTask = (id, text) => {
    const newText = prompt("Edit task", text);
    if (newText) {
      dispatch(editTask({ id, text: newText }));
    }
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Grid container direction="row" alignItems="center" spacing={2}>
              <Grid item xs={2}>
                <Checkbox
                  checked={task.completed}
                  onChange={() => handleToggleTask(task.id)}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                />
              </Grid>
              <Grid item xs={6}>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.text}
                </span>
              </Grid>
              <Grid item xs >
                <Button sx={{margin: 1}} variant="contained" onClick={() => handleEditTask(task.id, task.text)}>
                  <EditIcon/>
                </Button>
                <Button sx={{margin: 1}} color="error" variant="contained" onClick={() => handleDeleteTask(task.id)}>
                  <DeleteIcon/>
                </Button>
              </Grid>
              
            </Grid>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
