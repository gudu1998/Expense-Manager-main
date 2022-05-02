import React from "react";

const ReadOnlyRow = ({ expense, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{expense.amount}</td>
      <td>{expense.currency}</td>
      <td>{expense.description}</td>
      <td>{expense.category}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, expense)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(expense._id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
