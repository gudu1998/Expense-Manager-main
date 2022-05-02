import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Register = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const values = { firstName, lastName, email, password };
    axios.post('http://localhost:5000/users/register', values).then(res => {
      if (res.data.message == 'You have successfully registered into the system')
        navigate('/login');
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

  }
  return (
    <>
      <div class="container">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label><br />
            <input type="text" value={firstName} class="form-control" onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label><br />
            <input type="text" value={lastName} class="form-control" onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="email">Email</label><br />
            <input type="email" value={email} class="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          </div><br />

          <div className="form-group">
            <label htmlFor="password">Password</label><br />
            <input type="password" value={password} class="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </div><br />
          <button className="btn btn-primary">Submit</button>
        </form>

      </div>


    </>
  )
}
