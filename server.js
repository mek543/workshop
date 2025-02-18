// server.js
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const customerRoutes = require("./app/routes/customerRoutes");

const app = express();
app.use(bodyParser.json());
app.use("/api/customers", customerRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
