## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|index: true|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :messages
- has_many :groups
  has_many  :groups,  through:  :users_groups

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|image|string||
|text|text||
|user_id|integer|null: false|
|group_id|integer|null: false|
### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false|

### Association
- has_many :messages
- has_many :users
  has_many  :users,  through:  :users_groups
## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group