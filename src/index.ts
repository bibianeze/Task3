import express, { Request, Response } from "express";

const app = express();
const port = 3000; // Define the port

// Define the /api/hello endpoint
app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello, world!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
