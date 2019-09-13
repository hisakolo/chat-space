## usersテーブル
|Column|Type|Options|
|------|----|-------|
|user|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :messages
- belongs_to :groups

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|text|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- has_many :group
- has_many :users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :messages
- has_many :user