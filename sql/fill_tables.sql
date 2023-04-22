INSERT INTO users (name, email, password) VALUES ('Kerwyn', 'kerwyn@example.com', 'kerwyn');

INSERT INTO carts (user_id, status) VALUES ('e1dc8410-0e9a-45c9-917a-b5d9ee15bcb5', 'OPEN');

INSERT INTO
    cart_items (cart_id, product_id, count)
VALUES
    ('f1a4063c-277f-496c-a89a-9b197db9c92a', '37b761cb-7662-4d2c-8d58-9ada810e4678', 5),
    ('f1a4063c-277f-496c-a89a-9b197db9c92a', '7567ec4b-b10c-45c5-9345-fc73c48a80a1', 2),
    ('f1a4063c-277f-496c-a89a-9b197db9c92a', '7567ec4b-b10c-48c5-9345-fc73c48a80a3', 8),
    ('f1a4063c-277f-496c-a89a-9b197db9c92a', '409915a2-d6d6-45b9-90bc-d88b75b21c61', 1);
