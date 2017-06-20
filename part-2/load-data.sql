\c grocery_store

COPY grocery_items (name, price, section) FROM '/Users/michaelmasterson/Desktop/LearnersGuild/phase-3-challenge/part-2/grocery.csv' DELIMITER ',' HEADER CSV;

INSERT INTO shoppers (id, first_name)
VALUES ('1', 'Michael'),
    ('2', 'Rai'),
    ('3', 'Derik'),
    ('4', 'Kathleen'),
    ('5', 'Luis');

INSERT INTO orders (order_id, order_date, name, section)
VALUES ('1', '6/19/2017', 'Bacon', 'meat'),
    ('1', '6/18/2017', 'Honey', 'packaged'),
    ('3', '6/17/2017', 'Lemons', 'produce'),
    ('4', '6/16/2017', 'Milk', 'dairy'),
    ('5', '6/16/2017', 'Pizza', 'frozen');