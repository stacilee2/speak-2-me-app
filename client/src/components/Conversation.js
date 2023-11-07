import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../context/user";
import { CableContext } from '../context/cable';
import { useNavigate } from 'react-router-dom';

function Conversation({ conversationId }) {
  const { user } = useContext(UserContext);
  const [previousMessages, setPreviousMessages] = useState([]); 
  const [newMessages, setNewMessages] = useState([]); 
  const [userInput, setUserInput] = useState("");
  const [errorsList, setErrorsList] = useState([]);
  const cable = useContext(CableContext);
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetch(`/messages?conversation_id=${conversationId}`)
      .then((response) => response.json())
      .then((data) => {
        setPreviousMessages(data);
      });
  }, [conversationId]);

  useEffect(() => {
    const subscription = cable.subscriptions.create(
      { channel: 'TherapyChatChannel', conversation_id: conversationId },
      {
        connected: () => console.log('connected'),
        disconnected: () => console.log('disconnected'),
        received: (updatedConversation) => {
       
            let message = updatedConversation.message;
            let sender = updatedConversation.sender;

            if (sender)
              message.username = sender;

            if (message) {
              setNewMessages((prevMessages) => {
                return [...prevMessages, message];
              });
            } else {
              message = { body: updatedConversation.body, sender: "Server",
            }
          }          
        }
      }
    )
    return () => {
      subscription.unsubscribe();
      console.log("Cleanup conversation")
    };
  }, [cable, conversationId]);

  function handleSubmit(e) {
    e.preventDefault();
    const message = {
      body: userInput,
      time: currentTime.toLocaleTimeString(),
      user_id: user.id,
      conversation_id: conversationId
    };

    fetch(`/messages`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({message}),
    })
      .then(async (r) => {
        if (r.ok) {
        } else {
          const res = await r.json();
          setErrorsList(res.errors);
          console.log(errorsList)
        }
      })
      setUserInput("");
  };

  function handleEndChat(e) {
    let chatId = e.target.id
    console.log("I'm clicked")
    fetch(`/conversations/${chatId}`, {
      method: "DELETE",
    }).then(response => {
      if (response.ok) {
        console.log('Conversation destroyed successfully.');
        navigate("/speechtasks")
      } else {
        console.log('Failed to destroy conversation.');
      }
    });
  }

  const previousMessagesList = previousMessages.map((message, index) => {
    return (
      <ul key={index} className='messages'>
        {message.time} - <strong>{message.body}</strong> - {message.username}
      </ul>
    );
  });

  return (
    <div>
      <div className="chat-messages" id="conversation">
        <h4>Chat Here...</h4>
        {previousMessagesList}
        {newMessages.map((message, index) => {
            return (
            <ul key={index} className='messages'>
               {message.time} - <strong>{message.body}</strong> - {message.username}
            </ul>
            );
        })}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="messageInput"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button type="submit">SEND</button>
        </form>
        <button type="button" onClick={handleEndChat} id={conversationId}>End Chat</button>
      </div>
    </div>
  );
}


export default Conversation;
