import React from 'react';
import ReactPlayer from 'react-player';

const Home = () => {

  return (
    <div className="home-container">
      <h1>Speak2Me</h1>
      <h3>This application offers real-time chat with other parents or therapists to get ideas for helping your child at home.</h3>
      <h4>What activities do we offer?</h4>
      <li>Articulation tasks</li>
      <li>Receptive Language tasks</li>
      <li>Expressive Language tasks</li>
      <li>Pragmatic Language tasks</li>
      <li>Voice tasks</li>
      <ReactPlayer className="home-video"
        url="https://youtu.be/7jVDqu1Ygjs?si=JYz4d69X6mocXcd6"
      />
    </div>
  )
};

export default Home;