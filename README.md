## usersテーブル
|Column|Type|Options|
|------|----|-------|
|user|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :messags
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
|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :tweet
- belongs_to :user