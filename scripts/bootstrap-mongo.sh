#!/bin/sh

mongoimport --db PATTERN_SHOWCASE --collection bio --file ./scripts/mongo-bootstrap-data/bio.json --jsonArray
mongoimport --db PATTERN_SHOWCASE --collection designs --file ./scripts/mongo-bootstrap-data/designs.json --jsonArray
mongoimport --db PATTERN_SHOWCASE --collection images --file ./scripts/mongo-bootstrap-data/images.json --jsonArray
mongoimport --db PATTERN_SHOWCASE --collection updates --file ./scripts/mongo-bootstrap-data/updates.json --jsonArray