import { MongoClient } from "mongodb";

const URI = "mongodb+srv://gameplayultra11:txoutAbSlwTASxGj@cluster0.jofke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI);

export const db = client.db("projetoSpotify")
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection)