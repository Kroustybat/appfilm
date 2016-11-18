class AddCheckedToFilm < ActiveRecord::Migration[5.0]
  def change
    add_column :films, :checked, :boolean
  end
end
