import React, { useState } from 'react'
import { Modal, Form, Row, FloatingLabel, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'

const EditTask = ({ props, show, handleClose }) => {
	const [name, setName] = useState('');
	const [time, setTime] = useState('');
	const [description, setDescriptions] = useState('');
	const [reminder, setReminder] = useState(false);
	
	const handleSubmit = () =>{
        Axios.put('http://localhost:3001/task/update',{
			taskName:name,description:description,time:time,reminder:reminder,id:props.id}).then(handleClose).catch((err)=>console.log(err))
	};
	return(
		<Modal show = {show} onHide={handleClose}>
			<Modal.Header closeButton> 
				<Modal.Title>
					Edit Task
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group as={Row} className="mb-3">
						<FloatingLabel label="Name">
							<Form.Control type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
						</FloatingLabel>
					</Form.Group>
					<Form.Group as={Row} className="mb-3">
						<FloatingLabel label="Date">
							<Form.Control type="date" value={time} placeholder="time" onChange={(e) => setTime(e.target.value)}/>
						</FloatingLabel>
					</Form.Group>					
					<Form.Group as={Row} className="mb-3">
						<Form.Label>Description
							<Form.Control as="textarea" value={description} placeholder="Enter Description" onChange={(e) => setDescriptions(e.target.value)}/>
						</Form.Label>
					</Form.Group>					
					<Form.Group as={Row} className="mb-3">
						<Form.Label>Reminder
							<Form.Check type="switch" value={reminder} onChange={()=> setReminder(!reminder)}/>
						</Form.Label>
					</Form.Group>
					<Button variant="primary" onClick={() => handleSubmit()}>Submit</Button>
				</Form>
			</Modal.Body>
		</Modal>
	)
}	

export default EditTask