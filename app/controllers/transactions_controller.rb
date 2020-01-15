
  class TransactionsController < ApplicationController
    def index
       transactions = Transaction.all
       render json: transactions
    end

    def show
        @transaction = Transaction.find_by(id: params[:id])
        render json: @transaction
    end

    def create
        transaction = Transaction.create(transaction_params)
        if transaction.valid?
            render json: transaction
        else
            render json: { errors: transaction.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def transaction_params
        params.permit(:tailor_id, :customer_id, :booking_date, :completed, :rating)
    end
  end
