# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Transaction.destroy_all
Message.destroy_all
UserService.destroy_all
User.destroy_all
Service.destroy_all

Transaction.reset_pk_sequence
Message.reset_pk_sequence
UserService.reset_pk_sequence
User.reset_pk_sequence
Service.reset_pk_sequence

user1 = User.create!(first_name: 'Karina', last_name: 'Macancela', email: 'karymacancela@gmail.com', tailor: true, zipcode: '11211', bio: 'Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here.', password_digest: 'karina')
# user1.password = 'karina'

user2 = User.create!(first_name: 'Mark', last_name: 'Jones', email: 'mjones@gmail.com', tailor: true, zipcode: '10011', bio: 'Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here.', password_digest: 'mark')
# user2.password = 'mark'

user3 = User.create!(first_name: 'Emily', last_name: 'Kim', email: 'ekim@gmail.com', tailor: false, zipcode: '11345', bio: 'Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here. Some description here.', password_digest: 'emily')
# user3.password = 'emily'

service1 = Service.create(name: 'Travel')
service2 = Service.create(name: 'Waist alteration')
service3 = Service.create(name: 'Bridal dress alteration')
service4 = Service.create(name: 'Same-day')

userService1 = UserService.create(user_id: user1.id, service_id: service1.id, description: 'I am willing to travel within reason.', price: 50)
userService2 = UserService.create(user_id: user1.id, service_id: service2.id, description: 'Willing to do quick alteration. I have alot of experience!', price: 60)
userService3 = UserService.create(user_id: user2.id, service_id: service4.id, description: 'Totally possible to complete your alterations within the same day for an extra fee.', price: 50)
userService4 = UserService.create(user_id: user2.id, service_id: service3.id, price: 100)

transaction1 = Transaction.create!(tailor_id: user1.id, customer_id: user3.id, booking_date: '12-01-2019', completed: false)
transaction2 = Transaction.create!(tailor_id: user1.id, customer_id: user3.id, booking_date: '11-30-2019', completed: false)
transaction3 = Transaction.create!(tailor_id: user2.id, customer_id: user3.id, booking_date: '11-20-2019', completed: true, rating: 3)

message1 = Message.create!(sender_id: user1.id, receiver_id: user2.id, title: 'Quick question...', body: 'Hey! Would you be able to tailor some jeans in time for thanksgiving?', message_date: '11-20-2019')

puts "Seeded."
