const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Your database
const middlewares = jsonServer.defaults();

server.use(cors()); // Enable CORS
server.use(middlewares);
server.use(jsonServer.bodyParser);

// 🔥 Use json-server-auth middleware
server.db = router.db;
server.use(auth);
server.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 JSON Server with Auth running on port ${PORT}`);
});
