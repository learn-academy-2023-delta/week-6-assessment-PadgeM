# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is the definition of the BlogPostsController class, which serves as the controller for handling requests related to blog posts.

class BlogPostsController < ApplicationController
  def index
    # ---2) This action retrieves all the blog posts from the database and assigns them to the instance variable '@posts'.
    @posts = BlogPost.all
  end

  # ---3) This action finds a specific blog post based on the 'id' parameter passed in the request and assigns it to the instance variable '@post'.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This action initializes a new instance of the 'BlogPost' model and assigns it to the instance variable '@post'. It is used to display the form for creating a new blog post.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This action creates a new blog post using the parameters from the 'blog_post_params' method and assigns it to the instance variable '@post'. If the post is valid and successfully saved, it redirects to the show page for the newly created post.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This action finds a specific blog post based on the 'id' parameter passed in the request and assigns it to the instance variable '@post'. It is used to display the form for editing an existing blog post.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This action updates the attributes of a specific blog post with the parameters from the 'blog_post_params' method. If the post is valid and successfully updated, it redirects to the show page for the updated post.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) This action deletes a specific blog post from the database. If the deletion is successful, it redirects to the index page that lists all the blog posts.
      redirect_to blog_posts_path
    end
  end

  # ---9) The private keyword indicates that the methods defined after it can only be accessed within the scope of this class. In this case, it is used to define helper methods that are used internally by the controller.

  private

  def blog_post_params
    # ---10) This method defines the permitted parameters for creating or updating a blog post. It uses the 'params' object to extract the values for the 'title' and 'content' attributes of the 'blog_post' model. Only these attributes are allowed to be mass-assigned for security reasons.
    params.require(:blog_post).permit(:title, :content)
  end
end
