const Customer = require("../models/customerModel");

exports.getAllCustomers = (req, res) => {
    Customer.getAll((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
};

exports.createCustomer = (req, res) => {
    Customer.create(req.body, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: "Customer added", id: result.insertId });
        }
    });
};