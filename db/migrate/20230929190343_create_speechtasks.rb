class CreateSpeechtasks < ActiveRecord::Migration[6.1]
  def change
    create_table :speechtasks do |t|
      t.string :assignment
      t.integer :user_id

      t.timestamps
    end
  end
end
