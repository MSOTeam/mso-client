import { connectToDatabase } from "../../util/mongodb";
var ObjectId = require("mongodb").ObjectID;

export default async (req, res) => {
  var arr = req.body.tags;

  if (arr?.length > 1 && arr?.includes("archive")) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "archive") {
        const removedElements = arr.splice(i, 1);
        console.log(removedElements, " fda"); // Outputs [3]
        i--; // Since the indexes of elements following this index get updated after removal
      }
    }
  }

  const { db } = await connectToDatabase();
  const content = await db.collection("content").updateMany(
    { _id: ObjectId(req?.body?.id) },

    {
      $set: {
        tags: arr,
      },
    }
  );

  res.json(content);
};
