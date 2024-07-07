class Bill < ApplicationRecord
  belongs_to :employee
  before_create :generate_token
  validates :token, uniqueness: true
  validates :employee, presence: true

  validates :amount, :bill_type, :employee_id, presence: true

  private

  def generate_token
    begin
      self.token = SecureRandom.hex(10)
    end while self.class.exists?(token: token)
  end
end
