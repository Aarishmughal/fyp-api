const express = require("express");
const cors = require("cors");
const http = require("http");
const morgan = require("morgan");

const { errorController } = require("./controllers");
const routes = require("./routes");
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);
app.all(/.*/, errorController);

const server = http.createServer(app);

module.exports = { app, server };
