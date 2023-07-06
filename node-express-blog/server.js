import express from "express";
import articles from "./articles.json" assert { type: "json" };

const PORT = process.env.PORT || 5000;
const server = express();

server.use(express.json());

server.get("/", (_, response) => {
  response.status(200).json("Hello World");
});

server.get("/posts", (_, response) => {
  response.status(200).json(articles);
});

server.get("/posts/:id", (request, response) => {
  const { id } = request.params;
  const article = articles.at(id);
  response.status(200).json(article);
});

server.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
