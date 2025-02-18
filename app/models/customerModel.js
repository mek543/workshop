// app/models/customerModel.js
const db = require("../../dbconfig");

const Customer = {
    getAll: (callback) => {
        db.query("SELECT * FROM customers", callback);
    },
    create: (data, callback) => {
        const query = "INSERT INTO customers (title, description, date, location, organizer) VALUES (?, ?, ?, ?, ?)";
        db.query(query, [data.title, data.description, data.date, data.location, data.organizer], callback);
    }
};

module.exports = Customer;
