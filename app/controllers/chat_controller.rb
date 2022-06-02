class ChatController < ApplicationController
  def index
    @messages = Message.last(100)
    @message = Message.new
  end
end
