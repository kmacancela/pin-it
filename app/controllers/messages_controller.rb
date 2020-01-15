
  class MessagesController < ApplicationController
    def index
       messages = Message.all
       render json: messages
    end

    def show
        @message = Message.find_by(id: params[:id])
        render json: @message
    end

    def create
        message = Message.create(message_params)
        if message.valid?
            render json: message
        else
            render json: { errors: message.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def message_params
        params.permit(:sender_id, :receiver_id, :title, :body, :message_date)
    end
  end
