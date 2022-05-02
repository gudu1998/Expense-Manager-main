import React from 'react'

export const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarText">

          <span class="navbar-text">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" id="sign-in" href="/dashboard">Dashboard</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="sign-up" href="/expense">Expenses</a>
              </li>
            </ul>
          </span>
        </div>
      </nav>
    </>
  )
}
