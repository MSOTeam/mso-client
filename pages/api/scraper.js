const cheerio = require("cheerio");
const request = require("request");

import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  var title;
  var image;
  var url;

  request(
    "https://www.theverge.com/22820563/constitution-meme-47-million-crypto-crowdfunding-blockchain-ethereum-constitution?ref=refind",
    function (error, response, html) {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        title = $('meta[property="og:title"]').attr("content");
        image = $('meta[property="og:image"]').attr("content");
        url =
          "https://www.theverge.com/22820563/constitution-meme-47-million-crypto-crowdfunding-blockchain-ethereum-constitution";

        const content = db.collection("content").insertOne({
          title: title,
          image: image,
          tags: ["cotton"],
          url: url,
        });
        res.json(content);
      }
    }
  );
};
