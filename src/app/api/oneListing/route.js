import clientPromise from "../../lib/db";
import { ObjectId } from "mongodb";

export async function POST(req) {
  try {
    const { id } = await req.json();
    const objectId = new ObjectId(id); // Safely convert the id to ObjectId

    const client = await clientPromise;
    console.log("Connected to MongoDB.");

    const dbsAndCollections = [
      { dbName: "listings", collectionName: "Residences" },
      { dbName: "advertisements", collectionName: "Residences" },
      { dbName: "advertisements", collectionName: "Lands" },
    ];

    let data = null;

    for (const { dbName, collectionName } of dbsAndCollections) {
      const db = client.db(dbName);
      data = await db.collection(collectionName).findOne({ _id: objectId });

      if (data) {
        console.log(`Found in ${dbName}.${collectionName}`);
        break;
      }
    }

    if (!data) {
      return Response.json(
        { error: "Not found in any collection" },
        { status: 404 }
      );
    }

    return Response.json(data);
  } catch (e) {
    console.error("API error:", e.message);
    return Response.json({ error: e.message }, { status: 500 });
  }
}
