-- DROP SCHEMA "book-store";

CREATE SCHEMA "book-store" AUTHORIZATION postgres;

-- "book-store".book definition

-- Drop table

-- DROP TABLE "book-store".book;

CREATE TABLE
    "book-store".book (
        id serial4 NOT NULL,
        title varchar(50) NOT NULL,
        isbn varchar(50) NOT NULL,
        description varchar(100) NOT NULL,
        publisher varchar(50) NOT NULL,
        author varchar(50) NOT NULL,
        pages int4 NULL,
        store_code varchar(5) NOT NULL,
        CONSTRAINT book_pkey PRIMARY KEY (id)
    );

-- "book-store".store definition

-- Drop table

-- DROP TABLE "book-store".store;

CREATE TABLE
    "book-store".store (
        id serial4 NOT NULL,
        "name" varchar(50) NOT NULL,
        code varchar(5) NOT NULL,
        address varchar(100) NOT NULL,
        CONSTRAINT store_pkey PRIMARY KEY (id)
    );