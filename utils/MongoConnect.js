import mongoose from 'mongoose'

// const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI
// const MONGODB_URI = process.env.NEXT_PUBLIC_ATLAS_URI
const MONGODB_URI = "mongodb://chidestech:1Luvumum%2f@cluster0-shard-00-00.pzpph.mongodb.net:27017,cluster0-shard-00-01.pzpph.mongodb.net:27017,cluster0-shard-00-02.pzpph.mongodb.net:27017/kenac-sports?ssl=true&replicaSet=atlas-sg448v-shard-0&authSource=admin&retryWrites=true&w=majority";



if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect