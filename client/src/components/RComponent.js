import React from 'react'

function RComponent ({handleBackClick}) {
  return (
    <div>
    <div className="task-card">
      <h1>R</h1>
      <br />
      <label><strong>Video:</strong></label> <br/>
      <a href="https://youtu.be/5F-qKn_x59I?si=lQV40rqNqRFs2v05" target="_blank" rel="noreferrer">Instructional Video for R</a> <br /><br/>
      <label><strong>Word List:</strong></label> <br/>
      <a href="https://www.home-speech-home.com/r-words.html" target="_blank" rel="noreferrer">R Word Lists</a> <br /><br/>
      <label><strong>Activity:</strong></label> <br/>
      <a href="https://boom.cards/fastplay/5q4j" target="_blank" rel="noreferrer">R Word Game</a> 
      <br />
      <br />
      <button onClick={handleBackClick}>Back to Task List</button>
    </div>
  </div>
  )
}

export default RComponent;