import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:admin@alura-node.azoefuy.mongodb.net/Alura-Node"
);

let db = mongoose.connection;

export default db;
