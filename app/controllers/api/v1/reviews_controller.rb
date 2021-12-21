
class Api::V1::ReviewsController < ApplicationController

    def update
      review = Review.find(params[:id])
      review.update!(review_params)
      render json: review
    end
  
    def destroy
      review = Review.find(params[:id])
      review.destroy
    end
  
    private
  
    def review_params
      params.require(:review).permit(:id, :user_id, :track_id, :review, :start_timestamp)
    end
  
  end