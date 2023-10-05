class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string :body
      t.string :time
      t.integer :room_id
      t.integer :user_id

      t.timestamps
    end
  end
end
