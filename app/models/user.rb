class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user
    user.password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(32)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password?(password)
    check = BCrypt::Password.new(password_digest)
    check.is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    save!
    session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
