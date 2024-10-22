# Personal Expense Tracker API

## Setup and Run Instructions

1. Clone the repository:
   ```bash
   git https://github.com/knarendra12/Personal-Expense-Tracker.git
   cd expense-tracker


<!-- Add a Transaction: -->

 POST http://localhost:3000/transactions 
 headers:"Content-Type: application/json"  
 body: {"type": "expense", "category": "Food", "amount": 50, "date": "2024-10-22", "description": "Lunch"}



<!-- Get All Transactions: -->
http://localhost:3000/transactions


<!-- Get Transaction by ID: -->
http://localhost:3000/transactions/1


<!-- Update a Transaction: -->
PUT http://localhost:3000/transactions/1 
Header: "Content-Type: application/json" 
Body: {"type": "income", "category": "Salary", "amount": 2000, "date": "2024-10-22", "description": "Monthly Salary"}

<!-- Delete a Transaction: -->

DELETE http://localhost:3000/transactions/1


<!-- Get Summary: -->

http://localhost:3000/transactions/summary
