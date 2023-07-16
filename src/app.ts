import express, { json } from "express";
import http from "http";
import { Server } from "socket.io";

const PORT = process.env.PORT || 3000;
const ROOT = process.cwd();
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(`${ROOT}/public`));

app.get("/", (req, res) => {
  res.sendFile(`${ROOT}/public/index.html`);
  return;
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello World!" });
  return;
});

io.on("connection", (socket) => {
  console.log("a user connected");
  console.log(socket.id);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}🚀.`);
});
