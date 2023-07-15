const express = require("express");
const app = express();
const port = 8000;
const mongoDB = require("./db");

mongoDB();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
});

app.use("/api", require("./Routes/CreateUser"));

app.listen(port, () => {
    console.log("connected");
});
