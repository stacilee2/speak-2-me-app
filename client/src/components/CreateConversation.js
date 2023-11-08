import React, { useState, useContext, useEffect } from 'react';
import Conversation from './Conversation';
import { UserContext } from '../context/user';

const CreateConversation = () => {
  const { user } = useContext(UserContext);
  const [conversationId, setConversationId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/conversations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: user.id }),
    })
      .then((r) => {
        if (!r.ok) {
          console.log('Error with response');
        }
        return r.json();
      })
      .then((data) => {
        if (data.id) {
          setConversationId(data.id);
        } else {
          console.log('Conversation creation failed');
        }
      })
      .then((error) => {
        console.log('Error with fetch', error);
        setIsLoading(false);
      })
  }, [user.id]);

  return (
    <div>
      {isLoading ? (
        <p>Creating conversation...</p>
      ) : conversationId ? (
        <div>
          <h3 className='chat-header'>Here you can chat with an available user, such as a parent or a therapist, and get ideas for your child to practice at home.</h3>
          <Conversation conversationId={conversationId} />
        </div>
      ) : (
        <p>Failed to create conversation.</p>
      )}
    </div>
  );
};

export default CreateConversation;
