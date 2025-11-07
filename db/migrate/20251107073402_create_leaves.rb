class CreateLeaves < ActiveRecord::Migration[8.0]
  def change
    create_table :leaves do |t|
      t.string :ate
      t.string :reason
      t.string :status

      t.timestamps
    end
  end
end
