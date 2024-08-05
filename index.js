const express = require("express");
const bodyParser = require("body-parser");

const { sequelize, RequestData } = require("./db-config");

// Initialize Express App
const app = express();
app.use(bodyParser.json());

// Sync database
sequelize.sync();

app.post("/data", async (_, res) => {
  try {
    await RequestData.create({
      data: "test data" + Math.random(),
    });
    res.status(201).send("Data saved successfully");
  } catch (error) {
    res.status(500).send("Error saving data");
  }
});

app.get("/", async (_, res) => {
  try {
    res.status(200).send("Hello World");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
