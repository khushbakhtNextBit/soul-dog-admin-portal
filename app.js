const express = require("express");
const path = require("path");
const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware");
app.use(express.static(path.join(__dirname, "build")));

app.use(
  [
    "/getAllJobs",
    "/addJob", 
    "/updateJob",
    "/getJob",
    "/deleteJob",
    "/getAllcityCouncil",
    "/addcityCouncils",
    "/updatecityCouncils",
    "/getcityCouncils",
    "/deletecityCouncils",
    "/getAllemailSubscribe",
    "/getAllemailSubscribe",
    "/GetImage"
  ],
  createProxyMiddleware({
    target: "https://macabre-shadow-87065.herokuapp.com/",
    changeOrigin: true,
  })
);
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(9000);
