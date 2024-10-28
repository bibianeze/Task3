"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const csv_writer_1 = require("csv-writer");
const app = (0, express_1.default)();
const port = 4000; // Define the port
// Define the /api/hello endpoint
app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello, world!" });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
const matches = fs_1.default.readFileSync("worldCup.csv", {
    encoding: "utf-8"
}).split("\n").map((row) => {
    return row.split(",");
});
console.log(matches);
const csvWriter = (0, csv_writer_1.createObjectCsvWriter)({
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
