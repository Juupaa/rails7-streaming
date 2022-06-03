class Message < ApplicationRecord
  after_create_commit { broadcast_append_to "messages" }

  validates :text, length: { minimum: 1 }
  validates :username, presence: true
end
