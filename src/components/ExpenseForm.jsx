import { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title || !amount || !date) {
      alert("Please fill all fields");
      return;
    }

    onAddExpense({ title, amount, date });

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler} className="card p-4 mt-3 shadow-sm">
      <h5 className="mb-3">Add New Expense</h5>

      <input
        className="form-control mb-3"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="form-control mb-3"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        className="form-control mb-3"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button className="btn btn-primary w-100">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
