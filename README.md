## Project Description

This project is a simple **Budget Tracker web application**.  
It helps users keep track of their money by recording **income and expenses**, calculating totals, and saving data so it is not lost after refreshing the page.

---

## Features

### Add Transaction
- Input fields for:
  - Description
  - Amount
  - Type (Income or Expense)
- An **Add** button to save the transaction

### Display Transactions
- Shows a list of all transactions
- Each transaction displays:
  - Description
  - Amount
  - Type
  - Delete option

### Calculate Totals
- Shows total income
- Shows total expenses
- Shows balance (Income − Expenses)

### Delete Transaction
- Allows deleting a transaction from the list
- Deleted data is also removed from storage

### Persistent Storage
- Transactions are saved using **localStorage**
- Data remains after page reload

### Color Coding
- Income transactions are shown in **green**
- Expense transactions are shown in **red**

### Filtering
- Filter transactions by:
  - All
  - Income
  - Expense

## Deliverables

### HTML File
- Contains the structure of the application  
- Includes form, totals section, transaction list, and chart

### CSS File
- Provides basic styling
- Handles layout, colors, and transaction highlighting

### JavaScript File
- Handles adding and deleting transactions
- Calculates totals and balance
