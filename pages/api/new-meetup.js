import { MongoClient } from "mongodb";

// /api/newmeetup
// POST /api/newmeetup

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://deleayo535:qwertylkj@cluster0.roc5x.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);

    client.close();
    res.status(201).json({ message: 'Meetup inserted!' });
   }
}

export default handler;
