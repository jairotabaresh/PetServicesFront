CREATE TABLE petservices.mascota
(id INT AUTO_INCREMENT PRIMARY KEY, 
especie VARCHAR(255) not null, 
raza VARCHAR(255), 
nombre VARCHAR(255) not null, 
edad int,
IdUsuario int not null, 
FOREIGN KEY (IdUsuario) REFERENCES petservices.usuario(Id));