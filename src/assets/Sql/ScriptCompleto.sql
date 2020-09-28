create database Petservices;

CREATE TABLE petservices.rol (
  id int NOT NULL AUTO_INCREMENT,
  nombre varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE petservices.usuario
(id INT AUTO_INCREMENT PRIMARY KEY, 
nombre VARCHAR(255) not null, 
celular VARCHAR(255) not null, 
correo  VARCHAR(255) not null,
direccion  VARCHAR(255),
IdRol int not null, 
contrasena VARCHAR(255) not null,
FOREIGN KEY (IdRol) REFERENCES petservices.rol(Id));

CREATE TABLE petservices.mascota
(id INT AUTO_INCREMENT PRIMARY KEY, 
especie VARCHAR(255) not null, 
raza VARCHAR(255), 
nombre VARCHAR(255) not null, 
edad int,
IdUsuario int not null, 
FOREIGN KEY (IdUsuario) REFERENCES petservices.usuario(Id));

CREATE TABLE petservices.servicio
(id INT AUTO_INCREMENT PRIMARY KEY, 
nombre VARCHAR(255) not null);

CREATE TABLE petservices.estado
(id INT AUTO_INCREMENT PRIMARY KEY, 
nombre VARCHAR(255) not null);

CREATE TABLE petservices.cita
(id INT AUTO_INCREMENT PRIMARY KEY, 
fecha date not null, 
hora time not null,  
comentario VARCHAR(255),
IdMascota int not null, 
IdSevicio int not null, 
IdEstado int not null, 
FOREIGN KEY (IdMascota) REFERENCES petservices.mascota(Id),
FOREIGN KEY (IdSevicio) REFERENCES petservices.servicio(Id),
FOREIGN KEY (IdEstado) REFERENCES petservices.estado(Id));


INSERT INTO petservices.rol (nombre) VALUES ('Administrador'), ('Usuario');

INSERT INTO petservices.usuario (nombre, celular , correo, direccion, IdRol, contrasena) 
values ('Pedro Perez', '3044942690', 'prueba@gmail.com', 'el recinto', 1, '1234'),
('Andres Perez', '3044942690', 'prueb2a@gmail.com', 'manrique', 2,'3456'),
('bryhyan galvan', '3044772690', 'prueba45@gmail.com', 'sabaneta', 2, '9765'),
('giovanni rios', '3045672690', 'prueba45@hotmail.com', 'bello', 2, '988664');

INSERT INTO petservices.mascota (especie, raza, nombre, edad, IdUsuario) 
VALUES ('Perro', 'Doberman', 'chuchi', 3, 2), 
('Gato', 'Persa', 'pepe', 67, 3), 
('Perro', 'Cocker', 'pepito', 12, 3), 
('Serpiente', 'Cascabel', 'rosa', 12, 4);

INSERT INTO petservices.estado (nombre)
VALUES ('Agendado'), 
('Atendido'), 
('Cancelado');

INSERT INTO petservices.servicio (nombre)
VALUES ('Consulta'), 
('Odontologia'), 
('Bano'), 
('Peluqueria');

INSERT INTO petservices.cita (fecha, hora, comentario, IdMascota, IdSevicio, IdEstado) 
VALUES ('2020-09-24', '18:00:00', 'lo llevare', 1, 1, 1),
('2020-09-25', '12:00:00', 'uno', 2, 2, 2),
('2020-09-26', '10:00:00', 'dos', 3, 2, 3);