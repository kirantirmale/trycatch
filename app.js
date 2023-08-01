const express = require("express");
const app = express();
const port = 7000;
const router = require("./router/index");
const {errorHandler} = require("./utils/errorHandler");
app.use(express.json());

app.use("/api", router);
app.use(errorHandler);

let data = [
  {
    id: 1,
    name: "Rajinder Malik",
    email: "malik_rajinder@lind.example",
    gender: "female",
    status: "active",
  },
];
app.get("/", (req, res) => {
  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
