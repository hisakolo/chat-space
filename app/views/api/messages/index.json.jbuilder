json.array! @messages do |message|
  json.id      message.id
  json.content message.content 
  json.date    Time.now.strftime("%Y/%m/%d %H:%M")
  json.user_name message.user.name
  json.image   message.image
end
