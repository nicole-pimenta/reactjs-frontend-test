const jsonServer = require("json-server");
const auth = require("json-server-auth");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 3001;

app.db = router.db;

const rules = auth.rewriter({
  "/users*": "/600/users$1",
  "/participantes*": "/640/participantes$1",
  "/guests*": "/664/guests$1",
});

var cors = require("cors");

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);
