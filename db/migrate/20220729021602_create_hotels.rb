class CreateHotels < ActiveRecord::Migration[6.1]
  def change
    create_table :hotels do |t|
      t.string :name
      t.string :location
      t.string :link

      t.timestamps
    end
  end
end
