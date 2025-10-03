import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = { 
  useNewUrlParser: true,
  useUnifiedTopology: true, // recommended for newer drivers
}

let client
let clientPromise

if (!uri) {
  throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') { 
  // Use a global variable to preserve the client across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise