class CreateShifts < ActiveRecord::Migration[8.0]
  def change
    create_table :shifts do |t|
      t.string :name
      t.time :start_time
      t.time :end_time

      t.timestamps
    end
  end
end
