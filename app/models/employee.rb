class Employee < ApplicationRecord
  before_create :generate_token
  validates :token, uniqueness: true

  has_many :bills, dependent: :destroy

  validates :first_name, :last_name, :email, :designation, presence: true
  validates :email, uniqueness: true

  private

  def generate_token
    begin
      self.token = SecureRandom.hex(10)
    end while self.class.exists?(token: token)
  end
end
