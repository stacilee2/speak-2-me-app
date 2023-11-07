import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router-dom';

function MySpeechTasks() {
  const navigate = useNavigate();
  const [task, setTask] = useState({
    assignment: "",
    user_id: ""
  });
  const [selectedTasks, setSelectedTasks] = useState([]);
  const { user } = useContext(UserContext);
  const [errorsList, setErrorsList] = useState([])

  useEffect(() => {
    fetch("/speechtasks")
      .then((response) => response.json())
      .then((data) => setSelectedTasks(data));
  }, []); 

  function handleChange(e) {
    setTask({
      assignment: e.target.value,
      user_id: user.id,
    });
  }

  function handleTaskSubmit(e) {
    e.preventDefault();
    fetch("/speechtasks", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((newTask) => {
          setSelectedTasks([...selectedTasks, newTask]);
          setTask({
            assignment: "", 
            user_id: user.id,
          });
         })
      } else {
        r.json().then(r => {
          console.log(r.errors)
          setErrorsList(r.errors)
          setTimeout(() => {
            setErrorsList([])
          }, 5000);
        })
      }
    })
  };

  function handleTaskDelete(e) {
    const taskId = e.target.id;
  
    fetch(`/speechtasks/${taskId}`, {
      method: "DELETE",
    })
    .then((response) => response.json())
    .then((deletedTask) => {
      console.log(deletedTask);
      setSelectedTasks((prevTasks) => prevTasks.filter((task) => task.id !== deletedTask.id));
    });
  };

  function handleEditTask(e) {
    let taskId = e.target.id;
    let task = e.target.value;

    navigate(`/speechtasks/${task}/${taskId}/edit`)
  };
  
  return (
    <div className='task-form'>
      <h2>My Speech Tasks</h2>
      <ul className="error-card">{errorsList.map((error, index) => 
        <ul key={index}>{error}</ul>
      )}</ul>
      <form onSubmit={handleTaskSubmit}>
        <label>Add your tasks to do here:</label> <br/>
        <input 
          type="text"
          value={task.assignment}
          onChange={handleChange}
        />
        <button type="submit">Add Task</button>
      </form>

      <div>
        {selectedTasks.map((task, index) => (
          <div key={index} className='task-item'>{task.assignment} 
            <div className='button-container'>
              <button 
                className='edit-button' 
                id={task.id} 
                value={task.assignment}
                onClick={handleEditTask}>
                Edit
              </button>
              <button 
                className="complete-button" 
                id={task.id} 
                onClick={handleTaskDelete}>
                Completed <span>&#10003;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MySpeechTasks;
