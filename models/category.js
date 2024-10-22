const db = require('../db/database');

class Category {
    static create(name, type, callback) {
        db.run(`INSERT INTO categories (name, type) VALUES (?, ?)`, [name, type], callback);
    }

    static getAll(callback) {
        db.all(`SELECT * FROM categories`, callback);
    }
}

module.exports = Category;
