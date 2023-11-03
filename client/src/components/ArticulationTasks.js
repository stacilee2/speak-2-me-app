import React, { useState } from 'react';
import KAndGComponent from './KAndGComponent'; 
import LComponent from './LComponent';
import RComponent from './RComponent';

function ArticulationTasks ({handleBackClick}){
  const [selectedTask, setSelectedTask] = useState(null);

  function handleTaskCardClick(taskId) {
    console.log("task card clicked is", taskId);
    setSelectedTask(taskId);
  }

  return (
    <div>
      {selectedTask ? (
        <div>
          {selectedTask === "k-g" && <KAndGComponent handleBackClick={handleBackClick}/>}
          {selectedTask === "l" && <LComponent handleBackClick={handleBackClick}/>}
          {selectedTask === "r" && <RComponent handleBackClick={handleBackClick}/>}
        </div>
      ) : (
        <div>
          <h1>Articulation</h1>
          <button onClick={handleBackClick}>Back to Task List</button>
          <p>The production of sounds.</p>
          <div className='speech-task-card' onClick={() => handleTaskCardClick("k-g")} id="k-g">K and G</div>
          <div className='speech-task-card' onClick={() => handleTaskCardClick("l")} id="l">L</div>
          <div className='speech-task-card' onClick={() => handleTaskCardClick("r")} id="r">R</div>
        </div>
      )}
    </div>
  );
}

export default ArticulationTasks;
