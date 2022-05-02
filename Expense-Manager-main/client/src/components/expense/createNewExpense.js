import React from 'react'
import './createNewExpense.css'
import ReactModal from 'react-modal';
import { useState } from "react"
import axios from "axios"

const customStyles = {
  content: {
    inset: '42% 48% 16% 58%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const CreateNewExpense = () => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(0)
  const [currency, setCurrency] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const onSubmit = () => {
    const values = { amount, currency, description, category }
    axios.post('http://localhost:5000/createNewExpense', values).then(res => {
      window.location.reload()
    })
      .catch(err => {
        console.log(err)
      })

  }

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }
  return (

    <>
      <div>
        <button onClick={openModal} id="openPopUp">Create Expense</button>
        <ReactModal
          isOpen={modalIsOpen}
          style={customStyles}
        >
          <h2 id="title">Add New Expense</h2>
          <a onClick={closeModal} id="closePopUp">X</a>


          <div class="container">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="text">Amount</label><br />
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} class="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Currency</label><br />
                <input type="text" value={currency} onChange={(e) => setCurrency(e.target.value)} class="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Description</label><br />
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} class="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Category</label><br />
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} class="form-control"
                />
              </div>
              <button className="btn btn-primary">Submit</button>
            </form>

          </div>

        </ReactModal>
      </div>
    </>
  )
}
