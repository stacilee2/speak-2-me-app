class TherapyChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "TherapyChatChannel"
    ActionCable.server.broadcast(
      "TherapyChatChannel",
      "Channel is subscribed"
    )
  end

  def unsubscribed
    stop_all_streams
  end

end


