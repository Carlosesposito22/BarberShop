CREATE TABLE CLIENTS (
    id BIGSERIAL not pull primary key,
    name VARCHAR(150) not pull,
    email VARCHAR(150) not pull,
    phone BPCHAR(11) not pull,
    CONSTRAINT UK_EMAIL UNIQUE (email),
    CONSTRAINT UK_PHONE UNIQUE (phone)
);