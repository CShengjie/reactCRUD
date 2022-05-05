import { Button, Card } from 'react-bootstrap'
const Task = ({ task, onDelete, onEdit }) => {
  return (
    <Card className="text-center" style = {{ width: '50vw', display:'block',margin: 'auto'}}>
      <Card.Body>
        <Card.Title>{task.taskName}</Card.Title>
        <Card.Subtitle>Date:{task.taskTime.substr(0,9)}</Card.Subtitle>
        <Card.Text>{task.taskDescription}</Card.Text>
        <Card.Text>Reminder: {task.reminder ? "On" : "Off"}</Card.Text>
        <Button variant="primary" onClick={() => onEdit(task)}>edit</Button>
        <Button variant="danger" onClick={() => onDelete(task.id)}>Delete</Button>
      </Card.Body>
    </Card>
  )
}

export default Task