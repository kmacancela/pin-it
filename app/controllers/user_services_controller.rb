
  class UserServicesController < ApplicationController
    def index
       userServices = UserService.all
       render json: userServices
    end

    def show
        @userServices = UserService.find_by(id: params[:id])
        render json: @userServices
    end

    def create
        userServices = UserService.create(userServices_params)
        if userServices.valid?
            render json: userServices
        else
            render json: { errors: userServices.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def userServices_params
        params.permit(:user_id, :service_id, :description, :price)
    end
  end
