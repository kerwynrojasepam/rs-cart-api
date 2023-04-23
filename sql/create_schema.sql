CREATE extension IF NOT EXISTS "uuid-ossp";

CREATE TYPE status_enum AS ENUM ('OPEN', 'ORDERED');

CREATE TABLE IF NOT EXISTS users (
    id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);

CREATE TABLE IF NOT EXISTS  carts (
    id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id uuid NOT NULL,
    status status_enum,
    created_at DATE NOT NULL DEFAULT NOW(),
    updated_at DATE NOT NULL DEFAULT NOW(),
    FOREIGN KEY ("user_id") REFERENCES "users" ("id")
);

CREATE TABLE IF NOT EXISTS cart_items (
    cart_id uuid NOT NULL,
    product_id uuid NOT NULL,
    count INT NOT NULL DEFAULT 1,
    FOREIGN KEY ("cart_id") REFERENCES "carts" ("id")
);

CREATE TABLE IF NOT EXISTS orders (
    id uuid default uuid_generate_v4(),
    user_id uuid NOT NULL,
    cart_id uuid NOT NULL,
    payment json,
    delivery json,
    comments text,
    status status_enum NOT NULL,
    total NUMERIC(18, 2) NOT NULL DEFAULT 0,
    FOREIGN KEY ("user_id") REFERENCES "users" ("id"),
    FOREIGN KEY ("cart_id") REFERENCES "carts" ("id")
);
