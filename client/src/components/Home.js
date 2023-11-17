import React from 'react';
import Speak from '/Users/stacipayne/speak-2-me-app/client/src/assets/Speak.gif';

const Home = () => {

  return (
    <div className="home-container">
      <img src={Speak} alt="speakLogo" className="logo" style={{ width: '200px', }}/>
      <h4>This application offers real-time chat with other parents or therapists to get ideas for helping your child at home.</h4>
      <h4>What do we offer? </h4>
        <h4>Video, information, tasks in the following areas: articulation, receptive language, expressive language, pragmatic language, and fluency.</h4>
        <iframe
          title="What Does a Speech Language Therapist Do?"
          className='home-video'
          src="https://www.youtube.com/embed/7jVDqu1Ygjs"
        ></iframe>
    </div>
  )
};

export default Home;