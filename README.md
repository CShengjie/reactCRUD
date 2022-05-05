# reactCRUD
Example React CRUD

set up localhost mySQL db with Tasks table

CREATE TABLE Tasks(
id int  primary key auto_increment,
taskName varchar(20) not null,
taskDescription text not null,
taskTime date not null,
reminder boolean not null
)

run npm install on server and client folder

run npm start to server and client to start applicatio
