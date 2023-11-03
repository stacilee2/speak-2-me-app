import React from 'react'

function LComponent ({handleBackClick}){
  return (
    <div>
      <div className="task-card">
        <h1>L</h1>
        <br />
        <label><strong>Video:</strong></label> <br/>
        <a href="https://www.youtube.com/watch?v=MmdNEn5P5-0" target="_blank" rel="noreferrer">Instructional Video for L</a> <br /> <br/>
        <label><strong>Word List:</strong></label> <br/>
        <a href="https://www.home-speech-home.com/l-words.html" target="_blank" rel="noreferrer">L Word Lists</a> <br /><br/>
        <label><strong>Activity:</strong></label> <br/>
        <a href="https://boom.cards/fastplay/sfft" target="_blank" rel="noreferrer">L Word Game</a> <br /><br/>
        <br />
        <button onClick={handleBackClick}>Back to Task List</button>
      </div>
    </div>
  )
}

export default LComponent;