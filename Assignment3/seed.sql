INSERT INTO adressTable (number, roadName, city) VALUES
(123, 'road of potier', 'Paris'),
(456, 'Santa Comba', 'Irvine'),
(789, 'Boulevard Street', 'Irvine'),
(101, 'Star Boulevard', 'Los Angeles');

INSERT INTO author (name, password, adress_id) VALUES
('Michel Polnaref', 'password12345678910', 1),
('CatFart', 'N3v3r_G0n4_G1v3_Y0u_Up!', 4);

INSERT INTO users (name, password, adress_id) VALUES
('Ann Onyme', '66666666', 3),
('Jade Orlabit', 'Joke321', 2);

INSERT INTO excuse (content, rate, id_author, id_user) VALUES
('I got the crampte who apagni', 4, 1, 2),
('My bus was late', 3, 2, 1);
