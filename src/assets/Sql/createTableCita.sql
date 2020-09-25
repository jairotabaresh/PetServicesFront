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