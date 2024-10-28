import express, { Request, Response } from "express";
import fs from 'fs';

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
