const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');

// Create a transaction
router.post('/', (req, res) => {
    const transaction = req.body;
    Transaction.create(transaction, function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Transaction created' });
    });
});

// Get all transactions
router.get('/', (req, res) => {
    Transaction.getAll((err, transactions) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(transactions);
    });
});

// Get transaction by ID
router.get('/:id', (req, res) => {
    Transaction.getById(req.params.id, (err, transaction) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
        res.json(transaction);
    });
});

// Update transaction by ID
router.put('/:id', (req, res) => {
    Transaction.update(req.params.id, req.body, function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Transaction updated' });
    });
});

// Delete transaction by ID
router.delete('/:id', (req, res) => {
    Transaction.delete(req.params.id, function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Transaction deleted' });
    });
});

// Get summary of transactions
router.get('/summary', (req, res) => {
    Transaction.getSummary((err, summary) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(summary);
    });
});

module.exports = router;
