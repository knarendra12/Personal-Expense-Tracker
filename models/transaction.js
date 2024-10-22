const db = require('../db/database');

class Transaction {
    static create(transaction, callback) {
        const { type, category, amount, date, description } = transaction;
        db.run(`INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)`,
            [type, category, amount, date, description], callback);
    }

    static getAll(callback) {
        db.all(`SELECT * FROM transactions`, callback);
    }

    static getById(id, callback) {
        db.get(`SELECT * FROM transactions WHERE id = ?`, [id], callback);
    }

    static update(id, transaction, callback) {
        const { type, category, amount, date, description } = transaction;
        db.run(`UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ? WHERE id = ?`,
            [type, category, amount, date, description, id], callback);
    }

    static delete(id, callback) {
        db.run(`DELETE FROM transactions WHERE id = ?`, [id], callback);
    }

    static getSummary(callback) {
        db.all(`SELECT type, SUM(amount) AS total FROM transactions GROUP BY type`, callback);
    }
}

module.exports = Transaction;
