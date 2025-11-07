class FixLeavesStructure < ActiveRecord::Migration[8.0]
  def change
    change_table :leaves do |t|
      t.remove :ate
      t.date :start_date
      t.date :end_date
    end

    add_reference :leaves, :user, null: false, foreign_key: true
  end
end
