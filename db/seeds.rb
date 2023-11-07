# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.create({ first_name: 'Steve', last_name: 'Williams', username: "swilliams2", password: "stevie", password_confirmation: "stevie"})
User.create({ first_name: 'Ashley', last_name: 'Chan', username: "achan23", password: "ashley", password_confirmation: "ashley" })
User.create({ first_name: 'Adam', last_name: 'Robertson', username: "arobertson12", password: "arobs12", password_confirmation: "arobs12"})
User.create({ first_name: 'Jimmy', last_name: 'Hendrix', username: "jhendrix5", password: "rockandroll", password_confirmation: "rockandroll"})
User.create({ first_name: 'Mary', last_name: 'Poppins', username: "mpoppins1", password: "sugarspoon", password_confirmation: "sugarspoon"})


Speechtask.create({assignment: "Review receptive language information", user_id: 8})
Speechtask.create({assignment: "Watch fluency video", user_id: 9})
Speechtask.create({assignment: "Do K and G activites", user_id: 10})
Speechtask.create({assignment: "Read pragmatic language information", user_id: 11})
Speechtask.create({assignment: "Do expressive language activity", user_id: 12})