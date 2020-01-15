
  class UsersController < ApplicationController
    def index
       allUsers = User.all
       render json: allUsers
    end

    def show
        @user = User.find_by(id: params[:id])
        render json: @user
        # user_id = params[:id]
        # if user_id_from_token == user_id.to_i
        #   user = User.find(user_id)
        #   render json: user
        # else
        #   render json: { go_away: true }, status: :unauthorized
        # end
    end

    def create
        user = User.create(user_params)
        if user.valid?
            # byebug
            render json: {data: user, token: create_token(user.id), ok: true}
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :email, :password)
    end
  end
