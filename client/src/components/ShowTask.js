import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Task from './Task'
import { Container, Navbar, Button } from 'react-bootstrap';
import AddTask from './AddTask'
import EditTask from './EditTask'

const ShowTask = () => {
  const [taskList, setTaskList] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [showEditTask, setShowEditTask] = useState(false);
  const [taskProps, setTaskprops] = useState();

  useEffect(()=>{getTasks()},[taskList]);
  const getTasks = () =>{
    Axios.get('http://localhost:3001/task/show').then((response) => {
      setTaskList(response.data);
    });
  };

  const deleteTask = (id) => {
    Axios.delete('http://localhost:3001/task/delete', {
      headers:{},data:{id:id}}).then(console.log('success')).catch((err)=>console.log(err))
  };

  const editTask = (props) => {
    setShowEditTask(true)
    setTaskprops(props)
  };

  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>Task Manager</Navbar.Brand>
          <Button variant="primary" onClick={() => setShowAddTask(true)}>Add Task</Button>
        </Container>
      </Navbar>
      {taskList.map((tasks) => {
        return (
          <Task key ={tasks.id} task = {tasks} onDelete = {deleteTask} onEdit = {editTask}/>
        )
      })}
      <AddTask show={showAddTask} handleClose={() => setShowAddTask(false)}/>
      <EditTask show={showEditTask} props={taskProps} handleClose = {() => setShowEditTask(false)}/>
    </div>
  )
}

export default ShowTask