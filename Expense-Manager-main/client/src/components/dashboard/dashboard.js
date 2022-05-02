import React, { useState, useEffect } from 'react'
import axios from "axios"
import './dashboard.css'
import { Navbar } from "../navbar/navbar";
export const Dashboard = () => {
  const [showTotalSpentAmount, setshowTotalSpentAmount] = useState(0)
  const [showLastTransactions, setshowLastTransactions] = useState([]);


  useEffect(() => {
    showTotalAmount();
  }, []);

  useEffect(() => {
    showLastTransaction();
  }, []);

  const showTotalAmount = async () => {
    await axios.get('http://localhost:5000/showTotalSpentAmount').then(res => {
      console.log(res.data.message)
      setshowTotalSpentAmount(res.data.message)
    }).catch(err => {
      console.log(err)
    })
  }

  const showLastTransaction = async () => {
    await axios.get('http://localhost:5000/showLastTransactions').then(res => {
      console.log(res.data)
      setshowLastTransactions(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>

      <Navbar />
      <h1>Total Spent amount: {showTotalSpentAmount}</h1>

      <div className="app-container">
        <table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Currency</th>
              <th>Description</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {showLastTransactions.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.amount}</td>
                  <td>{val.currency}</td>
                  <td>{val.description}</td>
                  <td>{val.category}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

      </div>



    </>
  )
}
