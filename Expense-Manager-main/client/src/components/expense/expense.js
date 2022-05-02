import React, { useState, Fragment, useEffect } from "react";
import axios from "axios"

import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import { CreateNewExpense } from './createNewExpense'
import { Navbar } from "../navbar/navbar";

export const Expense = () => {
    const [viewExpense, setviewExpense] = useState([]);

    useEffect(() => {
        const viewExpenses = async () => {
            const res = await axios.get('http://localhost:5000/viewExpense');
            setviewExpense(res.data);
        };

        viewExpenses();
    }, []);

    const [editFormData, setEditFormData] = useState({
        amount: 0,
        currency: "",
        description: "",
        category: "",
    });

    const [editExpenseId, setEditExpenseId] = useState(null);


    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };

        console.log(newFormData)
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };



    const handleEditClick = (event, expense) => {
        event.preventDefault();
        setEditExpenseId(expense._id);

        const formValues = {
            amount: expense.amount,
            currency: expense.currency,
            description: expense.description,
            category: expense.category,
        };
        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditExpenseId(null);
    };

    const handleDeleteClick = (expense_id) => {
        axios.get('http://localhost:5000/deleteExpense', { params: { expense_id } }).then(res => {
            window.location.reload()
        }).catch(err => {
            console.log(err)
        })
    };




    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedExpense = {
            expense_id: editExpenseId,
            amount: editFormData.amount,
            currency: editFormData.currency,
            description: editFormData.description,
            category: editFormData.category,
        };


        axios.get('http://localhost:5000/updateExpense', { params: editedExpense }).then(res => {
            window.location.reload()
        }).catch(err => {
            console.log(err)
        })
    };

    return (
        <>
            <Navbar />
            <Fragment>
                <CreateNewExpense />
            </Fragment>

                <form onSubmit={handleEditFormSubmit}>
                    <table>
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Currency</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viewExpense.map((expense) => (
                                <Fragment>
                                    {editExpenseId === expense._id ? (
                                        <EditableRow
                                            editFormData={editFormData}
                                            handleEditFormChange={handleEditFormChange}
                                            handleCancelClick={handleCancelClick} />
                                    ) : (
                                        <ReadOnlyRow
                                            expense={expense}
                                            handleEditClick={handleEditClick}
                                            handleDeleteClick={handleDeleteClick} />
                                    )}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </form>

            </>
    );
}
