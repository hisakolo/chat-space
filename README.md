## usersテーブル
|Column|Type|Options|
|------|----|-------|
|user|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :messages
- has_many :groups

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|text|text||
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- has_many :users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :message
- belongs_to :user