import React from 'react';

const Home = () => {

  const imagePath = '/Speak.gif';

  return (
    <div className="home-container">
     <img src={process.env.PUBLIC_URL + imagePath} alt="Speak Logo" className="logo" style={{ width: '200px' }}/>
      <h4>This application offers real-time chat with other parents or therapists to get ideas for helping your child at home.</h4>
      <h4>What do we offer? </h4>
        <h4>We offer videos, information, tasks in the following areas: articulation, receptive language, expressive language, pragmatic language, and fluency.</h4>
        <iframe
          title="What Does a Speech Language Therapist Do?"
          className='home-video'
          src="https://www.youtube.com/embed/7jVDqu1Ygjs"
        ></iframe>
    </div>
  )
};

export default Home;