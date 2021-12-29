import { connectToDatabase } from "../../util/mongodb";
var ObjectId = require("mongodb").ObjectID;

export default async (req, res) => {
  console.log(req.body.tags)

  const { db } = await connectToDatabase();
  const content = await db.collection("content").update(
    { _id: ObjectId(req?.body?.id) },

    {
      $set: {
        tags: req?.body?.tags,
      },
    }
  );

  res.json(content);
};
