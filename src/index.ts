import express, { Request, Response } from "express";
import fs from 'fs';
import { createObjectCsvWriter } from "csv-writer";


const app = express();
const port = 4000; // Define the port

// Define the /api/hello endpoint
app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello, world!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


const matches = fs.readFileSync("worldCup.csv", {
  encoding: "utf-8"
}).split("\n").map((row: string): string[] =>{
  return row.split(",");
})

console.log(matches);

const csvWriter = createObjectCsvWriter({
  path: "file.csv",
  header: [
    { id: "fullname", title: "NAME" },
    { id: "position", title: "POSITION" },
    { id: "age", title: "AGE" },
  ],
});
const records = [
  { fullname: "Jennifer Cox", position: "President", age: "40" },
  { fullname: "Robert Smith", position: "Manager", age: "34" },
  { fullname: "Don Brown", position: "Programmer", age: "25" },
  { fullname: "Joel Williams", position: "Accountant", age: "30" },
  { fullname: "Robert White", position: "Clerk", age: "36" },
];
csvWriter.writeRecords(records).then(() => {
  console.log("...Done");
});


