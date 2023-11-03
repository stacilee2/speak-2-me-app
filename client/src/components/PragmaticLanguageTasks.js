import React from 'react'

function PragmaticLanguageTasks({handleBackClick}) {
  return (
    <div className='task-card'>
      <h1>Pragmatic Language</h1>
      <br />
      <label><strong>Video:</strong></label> <br/>
      <a href="https://youtu.be/cMYYf3KO7J8?si=fL1D8rYlHkmf_3nd" target="_blank" rel="noreferrer">Pragmatic Language Ideas for Home Video</a> <br /> <br/>
      <label><strong>Information:</strong></label> <br/>
      <a href="https://www.handyhandouts.com/pdf/35_Pragmatic_Skills.pdf" target="_blank" rel="noreferrer">Developing Pragmatic Language Information</a> <br /> <br/>
      <label><strong>Activities:</strong></label> <br/>
      <a href="https://boom.cards/fastplay/frce" target="_blank" rel="noreferrer">Pragmatic Language Home Activity</a> <br/>
      <a href="https://boom.cards/fastplay/txkk" target="_blank" rel="noreferrer">Conversation Tic Tac Toe</a> <br/>
      <a href="https://boom.cards/fastplay/menx" target="_blank" rel="noreferrer">Conversation Trail</a> <br/>
      <br />
      <br />
      <button onClick={handleBackClick}>Back to Task List</button>
    </div>
  )
}

export default PragmaticLanguageTasks