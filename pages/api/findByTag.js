import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  console.log(req.body);
  const content = await db
    .collection("content")
    .find({ tags: req.body })
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.json(content);
};
