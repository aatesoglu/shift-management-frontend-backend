# Be sure to restart your server when you modify this file.

# Enable CORS so the Next.js frontend can access the Rails API
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'localhost:3001', '127.0.0.1:3001', 'localhost:3000', '127.0.0.1:3000'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end
end
