class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.string :tile
      t.text :content
      t.string :author

      t.timestamps
    end
  end
end
