module Api
  module V1
    class SchedulesController < ApplicationController
      before_action :set_schedule, only: %i[show update destroy]

      def index
        render json: Schedule.all
      end

      def show
        render json: @schedule
      end

      def create
        schedule = Schedule.new(schedule_params)
        if schedule.save
          render json: schedule, status: :created
        else
          render json: schedule.errors, status: :unprocessable_entity
        end
      end

      def update
        if @schedule.update(schedule_params)
          render json: @schedule
        else
          render json: @schedule.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @schedule.destroy
        head :no_content
      end

      private

      def set_schedule
        @schedule = Schedule.find(params[:id])
      end

      def schedule_params
        params.require(:schedule).permit(:user_id, :shift_id, :work_date)
      end
    end
  end
end
