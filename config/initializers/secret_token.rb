# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
Journal::Application.config.secret_key_base = '0c41c9202ab46882fe119a855db140ba11616199f4cc88e5123f0c15a9419f3b27c2e4976b9b7e231ff05bb4b569fe9e941523ad151702bcc82565f47b68413f'
