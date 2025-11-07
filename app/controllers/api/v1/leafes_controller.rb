module Api
  module V1
    class LeafesController < ApplicationController
      before_action :set_leafe, only: %i[show update destroy]

      def index
        render json: Leafe.all
      end

      def show
        render json: @leafe
      end

      def create
        leafe = Leafe.new(leafe_params)
        if leafe.save
          render json: leafe, status: :created
        else
          render json: leafe.errors, status: :unprocessable_entity
        end
      end

      def update
        if @leafe.update(leafe_params)
          render json: @leafe
        else
          render json: @leafe.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @leafe.destroy
        head :no_content
      end

      private

      def set_leafe
        @leafe = Leafe.find(params[:id])
      end

      def leafe_params
        params.require(:leafe).permit(:user_id, :start_date, :end_date, :reason, :status)
      end
    end
  end
end
