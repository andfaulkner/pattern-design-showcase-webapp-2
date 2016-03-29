#!/bin/sh

echo '\n\n\n-----------------------------------------------------\n'
echo '*** Importing initial MongoDB data ***'
echo '\nImporting collection "bio":\n'
mongoimport --db PATTERN_SHOWCASE --collection bio --file ./scripts/mongo-bootstrap-data/bio.json --jsonArray

# echo '\nImporting collection "designs":\n'
mongoimport --db PATTERN_SHOWCASE --collection designs --file ./scripts/mongo-bootstrap-data/designs.json --jsonArray

# echo '\nImporting collection "images":\n'
mongoimport --db PATTERN_SHOWCASE --collection images --file ./scripts/mongo-bootstrap-data/images.json --jsonArray

# echo '\nImporting collection "updates":\n'
mongoimport --db PATTERN_SHOWCASE --collection updates --file ./scripts/mongo-bootstrap-data/updates.json --jsonArray