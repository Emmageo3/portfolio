create database candidature;

use candidature;

create table adresse (
    id int primary key auto_increment not null,
    region varchar (25)
);

insert into adresse (region) values
    ("Dakar"),
    ("Thies"),
    ("Diourbel"),
    ("Fatick"),
    ("Kaolack"),
    ("Ziguinchor"),
    ("Saint-Louis"),
    ("Tambacounda"),
    ("Louga"),
    ("Kedougou"),
    ("Sedhiou"),
    ("Matam"),
    ("Kolda"),
    ("Kaffrine");

create table fabrique (
    id int primary key auto_increment not null,
    ville varchar (25)
);

insert into fabrique (ville) values
    ("Dakar"),
    ("Thies"),
    ("Diourbel"),
    ("Fatick"),
    ("Kaolack"),
    ("Ziguinchor"),
    ("Saint-Louis"),
    ("Tambacounda"),
    ("Louga"),
    ("Kedougou"),
    ("Sedhiou"),
    ("Matam"),
    ("Kolda"),
    ("Kaffrine");


create table type_formation (
    id int primary key auto_increment not null,
    libelle varchar (25)
);

insert into type_formation (libelle) values 
    ("formation tech"),
    ("formations transverses"),
    ("formations courtes"),
    ("formations en partenariat");

create table candidat (
    id int primary key auto_increment not null,
    prenom varchar (25),
    nom varchar (25),
    cv varchar (255),
    age int,
    adresseID int,
    foreign key (adresseID) references adresse(id) on delete cascade
);

insert into candidat (prenom, nom, cv, age, adresseID) values
("Emma", "Kanfany", "cv.pdf", 20, 1),
("Malick", "Diop", "cv.pdf1", 25, 5),
("Alvina", "Ba", "cv.pdf2", 20, 12),
("Diaba", "Mbodj", "cv.pdf3", 20, 14),
("Ibrahima", "Ndiaye", "cv.pdf4", 24, 1);


create table formation (
    id int primary key auto_increment not null,
    nom varchar (25),
    description_form text,
    referentiel text,
    duree int,
    prerequis text,
    fabriqueID int,
    typeID int,
    foreign key (fabriqueID) references fabrique(id) on delete cascade,
    foreign key (typeID) references type_formation(id) on delete cascade
);


create table postuler (
    id int primary key auto_increment not null,
    candidatID int,
    formationID int,
    foreign key (candidatID) references candidat(id) on delete cascade,
    foreign key (formationID) references formation(id) on delete cascade
);