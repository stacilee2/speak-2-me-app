class ConversationsController < ApplicationController
  skip_before_action :authorize, only: [:index]

  def index
    @conversations = Conversation.all
    render json: @conversations
  end

  def create
      user_id = params[:user_id]            
      another_user = User.where("id != ?", user_id).first

      if another_user.present?
          another_user_id = another_user.id

          user_id1 = user_id < another_user_id ? user_id : another_user_id
          user_id2 = user_id >= another_user_id ? user_id : another_user_id
          
          @conversation = Conversation.where(sender_id: user_id1).where(recipient_id: user_id2).first
          if @conversation.blank?
            @conversation = Conversation.create(sender_id: user_id1, recipient_id: user_id2, conversation_id: 0)                
          end
          render json: @conversation, status: :created   
      else
          render json: { message: 'There is no available user' }, status: :unprocessable_entity
      end
  end

  def login
    user = User.find(params[:user_id])
    user.update(available: true)
    render json: { message: 'Logged in successfully' }
  end

  def destroy
    conversation = Conversation.find(params[:id])
    conversation.destroy
  end

end
