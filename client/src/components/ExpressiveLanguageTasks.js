import React from 'react'

function ExpressiveLanguageTasks ({handleBackClick}) {
  return (
    <div>
    <div className="task-card">
      <h1>Expressive Language</h1>
      <p>Using vocabulary and/or sentences.</p>
      <label><strong>Video:</strong></label> <br/>
      <a href="https://youtu.be/8BS8FWMkEH4" target="_blank" rel="noreferrer">Instructional Video for Expressive Language</a> <br /><br/>
      <label><strong>Information:</strong></label> <br/>
      <a href="https://www.handyhandouts.com/pdf/402_Language_in_Car.pdf" target="_blank" rel="noreferrer">Language Practice in the Car!</a> <br /> <br/>
      <label><strong>Activity:</strong></label> <br/>
      <a href="https://boom.cards/fastplay/jkhq" target="_blank" rel="noreferrer">Expanding Utterances</a> <br />
      <br />
      <button onClick={handleBackClick}>Back to Task List</button>
    </div>
  </div>
  )
}

export default ExpressiveLanguageTasks;