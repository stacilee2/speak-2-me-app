import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Conversation from './components/Conversation';
import Login from './components/Login';
import Signup from './components/Signup';
import { UserProvider } from "./context/user";
import CreateConversation from './components/CreateConversation';
import SpeechTaskList from './components/SpeechTaskList';
import MySpeechTasks from "./components/MySpeechTasks";
import ArticulationTasks from './components/ArticulationTasks';
import EditToDoForm from './components/EditToDoForm';

function App() {

  return (
    <div className="App">
        <UserProvider>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element = {<Signup /> } />
            <Route path="/conversation" element={<CreateConversation />} />
            <Route path="/messages" element={<Conversation />} />
            <Route path="/speechtasks" element={<SpeechTaskList />} />
            <Route path="/articulation/tasks" element={<ArticulationTasks />} />
            <Route path="/myspeechtasks" element={<MySpeechTasks/>}/>
            <Route path="/speechtasks/:task/:taskId/edit" element={<EditToDoForm />} />
          </Routes>
        </UserProvider>
    </div>
  );
}

export default App;
