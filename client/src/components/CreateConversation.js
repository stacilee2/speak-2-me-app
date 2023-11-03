import React, { useState, useContext } from 'react';
import Conversation from './Conversation';
import { UserContext } from '../context/user';

const CreateConversation = () => {
  const { user } = useContext(UserContext);
  const [conversationId, setConversationId] = useState({});

  fetch('/conversations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user_id: user.id }),
  })
    .then((response) => response.json())
    .then((data) => {
      setConversationId( data.id );
    });

  return (
    <div>
       
      {conversationId ? (
        <div>
          Start Conversation Here:
          <Conversation conversationId={conversationId}/>
        </div>
      ) : (
        <p>Creating conversation...</p>
      )}
    </div>
  );
};

export default CreateConversation;



