import {MongoClient} from 'mongodb';
import { env } from '$env/dynamic/private';

console.log(env.MONGODB_URI);
export const client = new MongoClient(env.MONGODB_URI ?? "mongodb://dummy");

export const database = client.db();