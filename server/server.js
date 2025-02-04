require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const { Client } = require("pg");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const DATABASES = ["MySQL", "PostgreSQL", "MongoDB"];

app.get("/databases", (req, res) => {
  res.json(DATABASES);
});

app.post("/connect", async (req, res) => {
  const { database, host, port, username, password, dbName } = req.body;

  try {
    if (!database || !host || !username || !password || !dbName) {
      return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    if (database === "MySQL") {
      const connection = await mysql.createConnection({ host, port, user: username, password, database: dbName });
      await connection.ping();
      return res.json({ success: true, message: "Connected to MySQL successfully" });
    } 
    
    else if (database === "PostgreSQL") {
      const client = new Client({ host, port, user: username, password, database: dbName });
      await client.connect();
      return res.json({ success: true, message: "Connected to PostgreSQL successfully" });
    } 
    
    else if (database === "MongoDB") {
        const uri = `mongodb+srv://${username}:${encodeURIComponent(password)}@${host}/${dbName}?retryWrites=true&w=majority`;
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        res.json({ success: true, message: "Connected to MongoDB successfully" });
    }
    
    
    else {
      return res.status(400).json({ success: false, message: "Invalid database type" });
    }
  } catch (error) {
    console.error("Database connection error:", error.message);
    return res.status(500).json({ success: false, message: `Connection failed: ${error.message}` });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
