const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Ulum cantikkkkk"));
app.use("/api/users", require("./router/api/users"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
