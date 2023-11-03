import React from 'react'

function ReceptiveLanguageTasks ({handleBackClick}) {
  return (
    <div>
    <div className="task-card">
      <h1>Receptive Language</h1>
      <p>Understanding/comprehending vocabulary and/or sentences.</p>
      <label><strong>Video:</strong></label> <br/>
      <a href="https://youtu.be/MC1oJ9XXRG8?si=R6c3E47_GCWGvWR7" target="_blank" rel="noreferrer">Instructional Video for Receptive Language</a> <br /><br/>
      <label><strong>Information:</strong></label> <br/>
      <a href="https://www.handyhandouts.com/pdf/44_Make_Learning_Fun.pdf" target="_blank" rel="noreferrer">Language Learning Recommendations</a> <br /> <br/>
      <label><strong>Activity:</strong></label> <br/>
      <a href="https://boom.cards/fastplay/q8zpd" target="_blank" rel="noreferrer">Object Identification In Home Activity</a> <br />
      <br />
      <button onClick={handleBackClick}>Back to Task List</button>
    </div>
  </div>
  )
}

export default ReceptiveLanguageTasks