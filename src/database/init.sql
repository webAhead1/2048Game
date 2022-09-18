BEGIN;

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email text NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  password text NOT NULL,
  highestscore INTEGER
);
INSERT INTO users (email, firstname, lastname,password, highestscore) VALUES
('a@a.a', 'rand', 'massalha','1234', 0);

COMMIT;