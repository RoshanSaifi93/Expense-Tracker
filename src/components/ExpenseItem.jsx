const ExpenseItem = ({ item, onDelete }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div> 
                <h6 className="mb-0">{item.title}</h6>
                <small className="text-muted">{item.date}</small>
            </div>

            <div>
            <span className="me-3 fw-bold">₹{item.amount}</span>
            <button className="btn btn-danger btn-sm" onClick={() => onDelete(item.id)}>Delete</button>
            </div>
        </li>
    );
};

export default ExpenseItem;