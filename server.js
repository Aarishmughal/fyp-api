const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const { app, server } = require("./app");
const { connectMongo } = require("./models");

const DB_URI = process.env.MONGODB_URI.replace(
  "<MONGODB_USER>",
  process.env.MONGODB_USER,
).replace("<MONGODB_PASSWORD>", process.env.MONGODB_PASSWORD);

connectMongo(DB_URI).then(() => {
  console.log("Database Connection Successful 🟢");
  server.listen(process.env.PORT, () => {
    console.log("Server is live at 3000 🟢");
  });
});
