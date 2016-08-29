# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :text             not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  seating     :integer
#

class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    Bench.where(lat: bounds["southWest"]["lat"]..bounds["northEast"]["lat"], lng: bounds["southWest"]["lng"]..bounds["northEast"]["lng"])
  end

end
