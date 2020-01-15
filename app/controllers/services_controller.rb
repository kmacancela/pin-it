
  class ServicesController < ApplicationController
    def index
       services = Service.all
       render json: services
    end

    def show
        @service = Service.find_by(id: params[:id])
        render json: @service
    end

    def create
        service = Service.create(service_params)
        if service.valid?
            render json: service
        else
            render json: { errors: service.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def service_params
        params.permit(:name)
    end
  end
