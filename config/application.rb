require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ChatSpace
  class Application < Rails::Application
    config.generators do |g|
    config.i18n.default_locale = :ja
    config.time_zone = ’Tokyo’
    config.active_record.default_timezone = :utc
      g.stylesheets false
      g.javascripts false
      g.helper false
      g.test_framework false
    end
  end
end
