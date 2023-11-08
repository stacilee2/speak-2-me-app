import React from 'react';
import Speak from '/Users/stacipayne/speak-2-me-app/client/src/assets/Speak.gif';

const Home = () => {

  return (
    <div className="home-container">
      <img src={Speak} alt="speakLogo" className="logo" style={{ width: '200px', }}/>
      <h3>This application offers real-time chat with other parents or therapists to get ideas for helping your child at home.</h3>
      <h4>What do we offer? </h4>
        <h4>Video, information, tasks:</h4>
        <div className='home-page-tasks'>
          <ul>-Articulation </ul>
          <ul>-Receptive Language</ul>
          <ul>-Expressive Language</ul>
          <ul>-Pragmatic Language</ul>
          <ul>-Voice</ul>
        </div>
        <iframe
          title="What Does a Speech Language Therapist Do?"
          className='home-video'
          src="https://www.youtube.com/embed/7jVDqu1Ygjs"
        ></iframe>
    </div>
  )
};

export default Home;