json.id         @message.id
json.content    @message.content 
json.date       Time.now.strftime("%Y/%m/%d %H:%M")
json.user_name  @message.user.name
json.image      @message.image



# json.(@message, :content, :image)
# json.created_at @message.created_at
# json.user_name @messa_ge.user.name
# #idもデータとして渡す
# json.id @message.id