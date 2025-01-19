import React from 'react';
import {useState} from 'react';

function App(){
	
	const [tasks, setTasks] = useState([]);
	const [task, setTask] = useState('');
	
	function addTask(){
		if(task){
			setTasks([...tasks, { id: Date.now(), text: task, done: false }]);
		}
		setTask('');
	}
	
	function taskDone(id){
		console.log(tasks);
		setTasks(tasks.map(task =>
			task.id === id ? { ...task, done: !task.done } : task
		));
		console.log(tasks);
	}
	
	function deleteTask(id){
		setTasks(tasks.filter((task) => 
  	  task.id !== id));
	}

	return(
		<>
			<div className="container mt-5">
				<h1 className="text-center">To-Do List</h1>
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Enter a task here"
						value={task}
						onChange={(e) => setTask(e.target.value)}
					/>
					<button className="btn btn-primary" onClick={addTask}>Add Task</button>
				</div>

				<ul className="list-group">
					{tasks.map(task => (
						<li
							key={task.id}
							className={`list-group-item d-flex justify-content-between align-items-center ${task.done ? 'list-group-item-success' : ''}`}
						>
							<span
								onClick={() => taskDone(task.id)}
								className={`task-text ${task.done ? 'text-decoration-line-througn' : ''}`}
							>
							{task.text}
							</span>
							<button
								className="btn btn-danger btn-sm"
								onClick={() => deleteTask(task.id)}
							>
							delete
							</button>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
export default App;