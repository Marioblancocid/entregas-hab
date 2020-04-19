create database videoclub;

use videoclub;

create table pelicula (
	ID int primary key auto_increment,
    nombre varchar(255) not null,
    descripcion varchar(255) not null,
    actores varchar(255) not null,
    director varchar(255) not null,
    caratula varchar(255) not null,
    PEGI int not null
);

create table socio (
	ID int primary key auto_increment,
    DNI varchar(9) not null,
    nombre varchar(255) not null,
    email varchar(255) not null,
    tlfn int not null,
    fecha_nac date not null
);

create table proveedor (
	ID int primary key auto_increment,
	nombre varchar(255) not null,
    tlfn int not null,
    DNI varchar(9) not null,
    email varchar(255) not null
);

create table copia (
	ID int primary key auto_increment,
    tipo enum('VHS', 'DVD'),
    tarifa enum('estreno', 'estandar', 'antiguas'),
    id_pelicula int,
    id_proveedor int,
    foreign key (id_pelicula) references pelicula(ID),
    foreign key (id_proveedor) references proveedor(ID)
);

create table alquiler (
	fecha_dev date not null,
    rating int CHECK (id BETWEEN 0 AND 9),
    comentario varchar(255) not null,
	id_socio int,
    id_copia int,
	foreign key (id_socio) references socio(ID),
    foreign key (id_copia) references copia(ID)
)