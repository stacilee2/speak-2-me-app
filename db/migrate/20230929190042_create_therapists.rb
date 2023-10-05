class CreateTherapists < ActiveRecord::Migration[6.1]
  def change
    create_table :therapists do |t|

      t.timestamps
    end
  end
end
