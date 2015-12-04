class HomepagesController < ApplicationController

  layout "admin_index" , only: [:index, :new, :create, :show, :edit, :update, :destroy]

  before_action :find_homepage, only: [:show, :edit, :update, :destroy]

  def index
    @homepages = Homepage.all
  end

  def new
    @homepage = Homepage.new
  end

  def create
     @homepage = Homepage.new(homepage_params)
      if @homepage.save
        redirect_to @homepage
      else
        render 'new'
      end
  end



  def show
  end

  def edit
  end

  def update
    if @homepage.update(homepage_params)
      redirect_to @homepage
    else
      render 'edit'
    end
  end

  def destroy
    @homepage.destroy
    redirect_to root_path
  end





  private


  def find_homepage
    @homepage = Homepage.find(params[:id])
  end


  def homepage_params
    params.require(:homepage).permit(:title, :subtitle, :body,)
  end


end
