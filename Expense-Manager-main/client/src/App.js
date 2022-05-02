import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Register } from './components/admin/register'
import { Login } from './components/admin/login'
import { Dashboard } from './components/dashboard/dashboard'
import { Expense } from './components/expense/expense'

function App() {
  return (

    <>
      <Outlet />

      <Router>
        <Routes>

          <Route path="/" element={<Navigate replace to="/register" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="expense" element={<Expense />} />
        </Routes>

      </Router>
    </>

  );
}

export default App;
