INSERT INTO images
(imageurl, category)
VALUES
($1, $2) RETURNING *
