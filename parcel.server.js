const fs = require("fs");
const path = require("path");
const Bundler = require("parcel-bundler");
const app = require("express")();
const data = require("./server/data.json");

const appDirectory = fs.realpathSync(process.cwd());

const file = path.resolve(appDirectory, "public/index.html");
const options = {};

const bundler = new Bundler(file, options);

app.get("/dashboard/:date", (req, res) =>
  res.send({ success: data[req.params.date], error: null })
);
app.use(bundler.middleware());

app.listen(3000);
