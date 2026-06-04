import { MongoClient, GridFSBucket, Db } from 'mongodb';

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

const globalWithMongo = global as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  const uri = process.env.MONGODB_URI || process.env.MONGODBURI;
  if (!uri) {
    throw new Error('Please define the MONGODB_URI or MONGODBURI environment variable inside .env.local');
  }

  if (process.env.NODE_ENV === 'development') {
    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    client = new MongoClient(uri);
    clientPromise = client.connect();
  }

  const conn = await clientPromise;
  const db = conn.db();
  return { client: conn, db };
}

export async function getGridFSBucket(): Promise<GridFSBucket> {
  const { db } = await connectToDatabase();
  return new GridFSBucket(db, {
    bucketName: 'gallery',
  });
}
