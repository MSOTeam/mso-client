import { connectToDatabase } from "../../util/mongodb";
var ObjectId = require("mongodb").ObjectID;

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const content = await db
    .collection("content")
    .updateOne(
      { _id: ObjectId(req?.body?.id) },
      { $pull: { tags: req?.body?.tag } }
    );

  res.json(content);
};
