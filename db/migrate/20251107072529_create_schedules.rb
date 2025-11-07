class CreateSchedules < ActiveRecord::Migration[8.0]
  def change
    create_table :schedules do |t|
      t.references :user, null: false, foreign_key: true
      t.references :shift, null: false, foreign_key: true
      t.date :work_date

      t.timestamps
    end
  end
end
