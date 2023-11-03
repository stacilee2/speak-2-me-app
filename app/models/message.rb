class Message < ApplicationRecord
    belongs_to :user
    belongs_to :conversation

    def username
        self.user.first_name
    end
    
    private

    def serialize
        serialized_message = ActiveModelSerializers::Adapter::Json.new(
          MessageSerializer.new(self)
        ).serializable_hash
        { body: serialized_message[:body], username: serialized_message[:username] }
    end
    
end



