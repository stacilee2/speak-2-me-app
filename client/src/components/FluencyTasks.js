import React from 'react'

function FluencyTasks({handleBackClick}) {
  return (
    <div className='task-card'>
    <h1>Fluency</h1>
    <br />
    <label><strong>Video:</strong></label> <br/> 
    <a href="https://youtu.be/tleTRXOqWCg?si=W4YN7mJRKieIgMC-" target="_blank" rel="noreferrer">Easy Onset and Light Contact How-To Video</a> <br /> <br />
    <label><strong>Information:</strong></label> <br/>
    <a href="https://www.handyhandouts.com/pdf/65_Cause_Treatment_of%20Stuttering.pdf" target="_blank" rel="noreferrer">Causes and Treatment of Stuttering In Young Children</a> <br/><br />
    <label><strong>Activities:</strong></label> <br/>
    <a href="https://boom.cards/fastplay/mc3n" target="_blank" rel="noreferrer">Fluency Shaping Tic Tac Toe</a> <br/>
    <a href="https://boom.cards/fastplay/msn2" target="_blank" rel="noreferrer">My Speech Machine Activity</a> <br/>
    <br />
    <br />
    <button onClick={handleBackClick}>Back to Task List</button>
  </div>
  )
}

export default FluencyTasks;