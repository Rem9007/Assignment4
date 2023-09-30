SELECT users.name AS user_name, adressTable.number, adressTable.roadName, adressTable.city
FROM users
INNER JOIN adressTable ON users.adress_id = adressTable.adress_id;


SELECT author.name AS author_name, excuse.content AS excuse_content
FROM author
INNER JOIN excuse ON author.id_author = excuse.id_author;


SELECT adressTable.city, COUNT(users.id_user) AS user_count
FROM adressTable
LEFT JOIN users ON adressTable.adress_id = users.adress_id
GROUP BY adressTable.city;


SELECT * FROM users;
