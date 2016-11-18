class CreateFilms < ActiveRecord::Migration[5.0]
  def change
    create_table :films do |t|
      t.string :nom
      t.string :realisateur
      t.string :date

      t.timestamps
    end
  end
end
