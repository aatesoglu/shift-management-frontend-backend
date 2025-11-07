# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_11_07_090000) do
  create_table "departments", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "leaves", force: :cascade do |t|
    t.string "reason"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "start_date"
    t.date "end_date"
    t.integer "user_id", null: false
    t.index ["user_id"], name: "index_leaves_on_user_id"
  end

  create_table "schedules", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "shift_id", null: false
    t.date "work_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["shift_id"], name: "index_schedules_on_shift_id"
    t.index ["user_id"], name: "index_schedules_on_user_id"
  end

  create_table "shifts", force: :cascade do |t|
    t.string "name"
    t.time "start_time"
    t.time "end_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "role"
    t.integer "department_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["department_id"], name: "index_users_on_department_id"
  end

  add_foreign_key "leaves", "users"
  add_foreign_key "schedules", "shifts"
  add_foreign_key "schedules", "users"
  add_foreign_key "users", "departments"
end
