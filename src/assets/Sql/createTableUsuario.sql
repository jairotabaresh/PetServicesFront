CREATE TABLE petservices.usuario
(id INT AUTO_INCREMENT PRIMARY KEY, 
nombre VARCHAR(255) not null, 
celular VARCHAR(255) not null, 
correo  VARCHAR(255) not null,
direccion  VARCHAR(255) ,
IdRol int not null, 
contrasena VARCHAR(255) not null,
FOREIGN KEY (IdRol) REFERENCES petservices.rol(Id));