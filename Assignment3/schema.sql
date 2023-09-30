CREATE TABLE adressTable(
	adress_id SERIAL,
	number int,
	roadName VARCHAR(50),
	city VARCHAR(50),
	PRIMARY KEY (adress_id)
);

CREATE TABLE author(
	id_author SERIAL,
	name VARCHAR(50),
	password VARCHAR(50),
	adress_id int,
	FOREIGN KEY (adress_id)REFERENCES adressTable(adress_id),
	PRIMARY KEY (id_author)
);

CREATE TABLE users(
	id_user SERIAL,
	name VARCHAR(50),
	password VARCHAR(50),
	adress_id int,
	FOREIGN KEY (adress_id)REFERENCES adressTable (adress_id),
	PRIMARY KEY (id_user)
);

CREATE TABLE excuse (
	id SERIAL,
	content TEXT,
	rate int,
	id_author int,
	id_user int,
	FOREIGN KEY (id_author)REFERENCES author (id_author),
	FOREIGN KEY (id_user)REFERENCES users (id_user),
	PRIMARY KEY (id)
);

