FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/images/resized_d4960b0b-55f0-4c5a-a8e4-54235a855622.jpg")}
    user
    group
  end
end