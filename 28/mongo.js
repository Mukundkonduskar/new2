const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(uri)

// Database Name
const dbName = 'newdb';
const collectionName = 'viva';

async function main() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB');

    // Access the database
    const database = client.db(dbName);

    // Create a collection (if not exists)
    const collection = database.collection(collectionName);

    // Insert records
    const documents = [
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 35 }
    ];

    const result = await collection.insertMany(documents);
    console.log(`${result.insertedCount} documents inserted`);

    // Query the collection
    const queryResult = await collection.find({}).toArray();
    console.log('Query Result:', queryResult);
  } finally {
    // Close the connection when done
    await client.close();
  }
}

// Run the main function
main().catch(console.error);
