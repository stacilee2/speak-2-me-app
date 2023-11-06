class AddIndexToConversations < ActiveRecord::Migration[6.1]
  def change
    add_column :conversations, :recipient_id, :integer
    add_index :conversations, :recipient_id
    add_column :conversations, :sender_id, :integer
    add_index :conversations, :sender_id
  end
end
