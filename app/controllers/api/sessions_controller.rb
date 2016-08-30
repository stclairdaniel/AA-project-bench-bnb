class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:session][:username], params[:session][:password]
    )
    if @user
      login!(@user)
      render './api/users/show'
    else
      @errors = ['Invalid credentials']
      render './errors'
    end
  end

  def destroy
    if current_user
      logout!
      render plain: '{}'
    else
      @errors = ['404: No current user']
      render './errors'
    end
  end

  private

  def session_params
    params.require(:session).permit(:username, :password)
  end
end