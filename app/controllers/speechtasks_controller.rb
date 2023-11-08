class SpeechtasksController < ApplicationController
    def index
        speechtasks = @current_user.speechtasks
        render json: speechtasks
    end

    def show
        speechtask = @current_user.speechtasks.find_by(id: params[:id])
        render json: speechtasks
    end

    def create
        speechtask = @current_user.speechtasks.create(speechtask_params)
        if speechtask.valid?
            render json: speechtask, status: :created
        else
            render json: {errors: speechtask.errors.full_messages}, status: 500
        end
    end

    def update
        speechtask = @current_user.speechtasks.find_by(id: params[:task_id])
      
        if speechtask
          if speechtask.update(speechtask_params)
            render json: speechtask
          else
            render json: { errors: speechtask.errors.full_messages }, status: :unprocessable_entity
          end
        else
          render json: { errors: "Speechtask not found" }, status: :not_found
        end
    end
      

    def destroy
        speechtask = @current_user.speechtasks.find_by(id: params[:task_id])
        speechtask.destroy
        render json: speechtask
    end

    private 

    def speechtask_params
        params.permit(:assignment, :user_id, :speechtask)
    end

end
