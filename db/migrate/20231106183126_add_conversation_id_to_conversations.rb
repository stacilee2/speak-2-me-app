class AddConversationIdToConversations < ActiveRecord::Migration[6.1]
  def change
    add_column :conversations, :conversation_id, :integer
  end
end
