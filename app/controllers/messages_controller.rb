class MessagesController < ApplicationController
    def index 
      conversation_id = params[:conversation_id]
      messages = Message.where(conversation_id: conversation_id).order(id: :asc)
      render json: messages
    end

    def create
      user = User.find(params[:message][:user_id])
      conversation_id = params[:message][:conversation_id]
      conversation = Conversation.find_by(id: conversation_id)
      message = Message.new(message_params)
      message.conversation = conversation
      
      if message.save
        ActionCable.server.broadcast('TherapyChatChannel', {message: message, sender: message.username})
      else
        render json: message.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      message = Message.find(params[:message_id])
      message.destroy
    end
    
    private
    
    def message_params
      params.require(:message).permit(:body, :time, :user_id, :conversation_id)
    end
  
  end
  