import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <ul className="list-group mt-4">
      {expenses.length === 0 && (
        <li className="list-group-item text-center">
          No expenses added yet
        </li>
      )}

      {expenses.map((item) => (
        <ExpenseItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ExpenseList;
