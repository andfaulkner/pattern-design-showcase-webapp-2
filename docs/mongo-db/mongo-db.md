#Setup
*   sudo apt-get install mongodb
*   sudo apt-get install mongodb-server
*   sudo apt-get install mongodb-dev

# Documents
*   A single record in MongoDB is called a document.
*   Similar to JSON
*   Example document:

				{
				   "_id" : ObjectId("54c955492b7c8eb21818bd09"),
				   "address" : {
				      "street" : "2 Avenue",
				      "zipcode" : "10075",
				      "building" : "1480",
				      "coord" : [ -73.9557413, 40.7720266 ]
				   },
				   "borough" : "Manhattan",
				   "cuisine" : "Italian",
				   "grades" : [
				      {
				         "date" : ISODate("2014-10-01T00:00:00Z"),
				         "grade" : "A",
				         "score" : 11
				      },
				      {
				         "date" : ISODate("2014-01-16T00:00:00Z"),
				         "grade" : "B",
				         "score" : 17
				      }
				   ],
				   "name" : "Vella",
				   "restaurant_id" : "41704620"
				}


# Collections
*   MongoDb stores documents in collections
*   no schema required
*   each collection must have a unique _id field that
				acts as a primary key

# Start and stop the db

## Start
*   basic: mongod
*   with port: mongod --port 12345
*   as a daemon, with output logged:
		      mongod --fork --logpath /var/log/mongodb.log
*   as a long-term daemon:
					sudo service mongod start


## Stop
*   stop:
				kill <pid of mongod>        <--NOT kill -9 !!
*   mongod cli option:
				mongod --shutdown
*   inside mongo shell:
				use admin
				db.shutdownServer()
*   stop a long-term daemon:
				sudo service mongod stop

## Restart
*   sudo service mongod restart

## Import

		mongoimport

		*   example:
					mongoimport --db test --collection restaurants --drop --file primer-dataset.json

		*   db:   name of database
		*
		*   ...where primer-dataset.json contains mongo-friendly document data

Managing DBs
============
Creating & destroying DBs
-------------------------
### Create DB - or Switch to existing DB
		use NAME_OF_NEW_DB

*   db then 'exists' as soon as you insert something into it
*   same syntax to switch DB: switches to db if it already exists

Get info about all dbs
----------------------
### View names of all DBs
		show dbs

Getting info from current DB
----------------------------
### View name of current DB
		db
					...OR...
		db.getName()

### Get names of all collections in db
		db.getCollectionNames()

### Get names of all collections in db
		db.getCollectionNames()

### Get stats on current DB
		db.stats()

### Get Mongo() connection object for current DB
		db.getMongo()

### Get info about the system the db is hosted on
		db.hostInfo()

Collections
===========
Creating & modifying
--------------------
### Create Collection
*   simply insert a document in as if the collection already existed

		db.designs.insert({"title":["backupbrain inc.", "web banners"]}

		*   collection "designs" now exists if it didn't before.
				If it did, the new item is added to the collection.

### Rename Collection
		db.rrecord.renameCollection("record")

### Remove Collection
		db.collectionName.drop()


Queries
=======
{a: 10} 
		Docs where a is 10, or an array containing the value 10.

{a: 10, b: “hello”} 
		Docs where a is 10 and b is “hello”.

{a: {$gt: 10}}
		Docs where a is greater than 10. Also available:
		$lt (<), $gte (>=), $lte, (<=), and $ne (!=).

{a: {$in: [10, “hello”]}} 
		Docs where a is either 10 or “hello”.

{a: {$all: [10, “hello”]}} 
		Docs where a is an array containing both 10 & “hello”.

{"a.b": 10} 
		Docs where a is an embedded document with b equal to 10.

{a: {$elemMatch: {b: 1, c: 2}}}
		Docs where a is an array that contains an
		element with both b equal to 1 and c equal to 2.

{$or: [{a: 1}, {b: 2}]} 
		Docs where a is 1 or b is 2.

{a: /^m/}
		Docs where a begins with the letter m.
		One can also use the regex operator: 
				{a: {$regex: “^m”}}.

{a: {$mod: [10, 1]}} 
		Docs where a mod 10 is 1.

{a: {$type: 2}} 
		Docs where a is a string. See bsonspec.org for more.

{ $text: { $search: “hello” } } 
		Docs that contain ”hello” on a text
		search. Requires a text index.


Setup in mongo cli
==================

use PATTERN_SHOWCASE

db.design.insert({
	"title":["backupbrain inc.", "web banners"],
	"dateCompleted":"2016/03/09",
	"sticky":false,
	"textContent":[
		"Web banners for backupbrain company website. Created in a 6-hour caffeine binge.",
		"Intended to represent and convery a sense of \"safety\" as fitting the company's theme of preventing data loss."
	],
	link:"T_B_D"
})

db.design.insert({
	"title":["Jaymes White Entertainment", "company logo"],
	"dateCompleted":"2016/01/01",
	"sticky":false,
	"textContent":[
		"Commissioned to create a \"mysterious\" pattern for a local mentalist / \"mind reading\" performing artist.",
		"Displayed on Jaymes White's website, and used in his promotional materials. Even available on a T-shirt - get it while you can :)."
	],
	link:"T_B_D"
})