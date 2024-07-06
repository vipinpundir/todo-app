import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


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
    <div className="task-input">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <Button onClick={handleAddTask} variant="contained" startIcon={<AddIcon />}> Add Task</Button>
    </div>
  );
};

export default TaskInput;
