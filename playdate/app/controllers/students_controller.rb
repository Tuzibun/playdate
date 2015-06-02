class StudentsController < ActionController::Base
  def index
  	@students = Student.all
  	render status: 200, json: @studetns.to_json
  end

  def show
  	@student = Student.find(params[:id])
  	render status: 200 json: @reminder.to_json
  end
 
end