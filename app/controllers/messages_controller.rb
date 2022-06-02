class MessagesController < ApplicationController
  def create
    build_message
    save_message
  end

  private

  def build_message
    @message = Message.new
    @message.attributes = message_params
  end

  def save_message
    respond_to do |format|
      if @message.save
        format.turbo_stream
      else
        format.html { render :new, status: :unprocessable_entity }
      end
    end
  end

  def message_params
    message_params = params["message"]
    message_params ? message_params.permit(:text, :username) : {}
  end
end
