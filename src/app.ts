import express, { json } from "express";
import http from "http";

const PORT = process.env.PORT || 3000;
const ROOT = process.cwd();
const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.sendFile(`${ROOT}/public/index.html`);
  return;
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello World!" });
  return;
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}🚀.`);
});
