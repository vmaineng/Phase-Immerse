class ExperienceSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :dt_booked_from, :dt_booked_to, :image, :price
  has_one :category
  has_one :location
end
