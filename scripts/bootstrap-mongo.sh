#!/bin/sh

echo '\n\n\n-----------------------------------------------------\n'
echo '*** Importing initial MongoDB data ***'

echo '\n-----------------'
echo '\nImporting "bio": path attempt 1:\n'
mongoimport --db PATTERN_SHOWCASE --collection bio --file ./scripts/mongo-bootstrap-data/bio.json --jsonArray
echo '\nImporting "bio": path attempt 2:\n'
mongoimport --db PATTERN_SHOWCASE --collection bio --file scripts/mongo-bootstrap-data/bio.json --jsonArray
echo '\nImporting "bio": path attempt 3:\n'
mongoimport --db PATTERN_SHOWCASE --collection bio --file ./mongo-bootstrap-data/bio.json --jsonArray
echo '\nImporting "bio": path attempt 4:\n'
mongoimport --db PATTERN_SHOWCASE --collection bio --file mongo-bootstrap-data/bio.json --jsonArray

echo '\n\n-----------------'
echo '\nImporting "designs": path attempt 1:\n'
mongoimport --db PATTERN_SHOWCASE --collection designs --file ./scripts/mongo-bootstrap-data/designs.json --jsonArray
echo '\nImporting "designs": path attempt 2:\n'
mongoimport --db PATTERN_SHOWCASE --collection designs --file scripts/mongo-bootstrap-data/designs.json --jsonArray
echo '\nImporting "designs": path attempt 3:\n'
mongoimport --db PATTERN_SHOWCASE --collection designs --file ./mongo-bootstrap-data/designs.json --jsonArray
echo '\nImporting "designs": path attempt 4:\n'
mongoimport --db PATTERN_SHOWCASE --collection designs --file mongo-bootstrap-data/designs.json --jsonArray

echo '\n\n-----------------'
echo '\nImporting "images": path attempt 1:\n'
mongoimport --db PATTERN_SHOWCASE --collection images --file ./scripts/mongo-bootstrap-data/images.json --jsonArray
echo '\nImporting "images": path attempt 2:\n'
mongoimport --db PATTERN_SHOWCASE --collection images --file scripts/mongo-bootstrap-data/images.json --jsonArray
echo '\nImporting "images": path attempt 3:\n'
mongoimport --db PATTERN_SHOWCASE --collection images --file ./mongo-bootstrap-data/images.json --jsonArray
echo '\nImporting "images": path attempt 4:\n'
mongoimport --db PATTERN_SHOWCASE --collection images --file mongo-bootstrap-data/images.json --jsonArray


echo '\n\n-----------------'
echo '\nImporting "updates": path attempt 1:\n'
mongoimport --db PATTERN_SHOWCASE --collection updates --file ./scripts/mongo-bootstrap-data/updates.json --jsonArray
echo '\nImporting "updates": path attempt 2:\n'
mongoimport --db PATTERN_SHOWCASE --collection updates --file scripts/mongo-bootstrap-data/updates.json --jsonArray
echo '\nImporting "updates": path attempt 3:\n'
mongoimport --db PATTERN_SHOWCASE --collection updates --file ./mongo-bootstrap-data/updates.json --jsonArray
echo '\nImporting "updates": path attempt 4:\n'
mongoimport --db PATTERN_SHOWCASE --collection updates --file mongo-bootstrap-data/updates.json --jsonArray