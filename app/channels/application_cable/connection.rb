module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user 

    def connect
      self.current_user = User.find(cookies.encrypted["_session_id"]["user_id"])
    end
   
  end
end

