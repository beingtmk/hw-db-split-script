import dotenv from "dotenv";
dotenv.config();

import MongoConnection from "./connections/mongo-connection";
const mongoConnection = new MongoConnection(process.env.MONGO_URL);

import { copyHomeworkClassroom } from "./utils/copyHomeworkClassroom";
import { copyStudentHomework } from "./utils/copyStudentHomework";

async function main() {
  await copyHomeworkClassroom();
  await copyStudentHomework();
}

mongoConnection.connect(async () => {
  console.log("Connected to MongoDB...");

  const start = new Date().getTime();
  await main().catch((error) => console.error(error));
  const end = new Date().getTime();
  const time = end - start;
  console.log("Done! Time taken: " + time / 1000 + "s");
});
