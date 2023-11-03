import React from 'react';

function KAndGComponent({handleBackClick}) {

  return (
    <div>
      <div className="task-card">
        <h1>K and G</h1>
        <br />
        <label><strong>Video:</strong></label> <br/> 
        <a href="https://youtu.be/fkxlLhxA6pY?si=CjskNaE5c3OFDOqZ" target="_blank" rel="noreferrer">Instructional Video for /k/ and /g/</a> <br /> <br />
        <label><strong>Word List:</strong></label> <br/>
        <a href="https://www.home-speech-home.com/k-words.html" target="_blank" rel="noreferrer">K Word Lists</a> <br /><br/>
        <label><strong>Activity:</strong></label> <br/>
        <a href="https://boom.cards/fastplay/6inu" target="_blank" rel="noreferrer">K Word Game</a> <br /> <br/>
        <label><strong>Word List:</strong></label> <br/>
        <a href="https://www.home-speech-home.com/g-words.html" target="_blank" rel="noreferrer">G Word Lists</a> <br /> <br/>
        <label><strong>Activity:</strong></label> <br/>
        <a href="https://boom.cards/fastplay/ykp8" target="_blank" rel="noreferrer">G Word Game</a> <br /> <br/>
        <br/>
        <button onClick={handleBackClick}>Back to Task List</button>
      </div>
    </div>
  );
}

export default KAndGComponent;
