import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task }));
      setTask("");
    }
  };

  return (
    <div className="">
      <Grid container marginTop={1} padding={1} spacing={2} alignItems="center" >
        <Grid item xs={8}>
          <TextField type="text"
            value={task}
            size="small"
            fullWidth
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task" />

        </Grid>
        <Grid item xs={4}>
          <Button fullWidth  onClick={handleAddTask} variant="contained"> Add Task</Button>

        </Grid>
      </Grid>

    </div>
  );
};

export default TaskInput;
