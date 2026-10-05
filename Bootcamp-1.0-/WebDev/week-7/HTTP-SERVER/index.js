const express = require("express");

const app = express();

app.get("/sum")
app.get("/add")
app.get("/multiply")
app.get("/divide")

app.listen(3000);