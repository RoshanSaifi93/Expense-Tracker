import { useState,useEffect } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm.jsx';
import ExpenseList from './components/ExpenseList.jsx';


function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const addExpense = (expense) => {
    setExpenses([...expenses, {...expense, id: Date.now()}]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const total = expenses.reduce((acc, item) => acc + Number(item.amount), 0);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <>
      <div className="container mt-5" style={{maxWidth: '600px'}}>
        <h2 className="text-center fw-bold my-4">Expense Tracker</h2>
        <ExpenseForm onAddExpense={addExpense} />
        <div className="alert alert-success text-center mt-3"><strong>Total Expense:</strong> ₹{total}</div>
        <ExpenseList expenses={expenses} onDelete={deleteExpense} />
        </div>
    </>
  )
}

export default App
