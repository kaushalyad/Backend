import http from "http";
import express from "express";
import path from "path";
const app = express();
const usersData = [];
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.post("/", (req, res) => {
  usersData.push({ userName: req.body.name, email: req.body.email });
  console.log(usersData);
  res.send("Successfully Message Sent");
});
app.listen(process.env.PORT, () => {
  console.log("server is running");
});

app.get("/data", (req, res) => {
  res.json(usersData);
});
