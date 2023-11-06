import React, { useState } from 'react';
import ArticulationTasks from './ArticulationTasks';
import ReceptiveLanguageTasks from './ReceptiveLanguageTasks';
import ExpressiveLanguageTasks from './ExpressiveLanguageTasks';
import PragmaticLanguageTasks from './PragmaticLanguageTasks';
import FluencyTasks from './FluencyTasks';

const SpeechTaskList = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  function handleTaskClick(taskId) {
    setSelectedTask(taskId);
  }

  function handleBackClick() {
    setSelectedTask(null);
  }

    let selectedComponent = null;

    switch (selectedTask) {
      case "articulation":
        selectedComponent = <ArticulationTasks handleBackClick={handleBackClick}/>;
        break;
      case "receptive-language":
        selectedComponent = <ReceptiveLanguageTasks handleBackClick={handleBackClick} />;
        break;
      case "expressive-language":
        selectedComponent = <ExpressiveLanguageTasks handleBackClick={handleBackClick} />;
        break;
      case "pragmatic-language":
        selectedComponent = <PragmaticLanguageTasks handleBackClick={handleBackClick} />;
        break;
      case "fluency":
        selectedComponent = <FluencyTasks handleBackClick={handleBackClick} />;
        break;
      default:
        selectedComponent = null;
    }

  return (
    <div>
      {selectedTask === null ? (
        <div>
          <div className='speech-tasks-container'>
          <p>Select the area of concern below for your child's home practice.</p> <br/>
          <hr/>
            <h4 className="speech-task-card" id="articulation" onClick={() => handleTaskClick("articulation")}>Articulation</h4>
            <h4 className="speech-task-card" id="receptive-language" onClick={() => handleTaskClick("receptive-language")}>Receptive Language</h4>
            <h4 className="speech-task-card" id="expressive-language" onClick={() => handleTaskClick("expressive-language")}>Expressive Language</h4>
            <h4 className="speech-task-card" id="pragmatic-language" onClick={() => handleTaskClick("pragmatic-language")}>Pragmatic Language</h4>
            <h4 className="speech-task-card" id="fluency" onClick={() => handleTaskClick("fluency")}>Fluency</h4>
          </div>
        </div>
      ) : (
        <div>
          {selectedComponent}
        </div>
      )}
    </div>
  );
};

export default SpeechTaskList;
