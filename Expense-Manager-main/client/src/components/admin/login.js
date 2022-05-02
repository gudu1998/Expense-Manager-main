import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [response, setResponse] = useState(false);
  const [serverResponse, setServerResponse] = useState('')
  let navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const values = { email, password };
    axios.post('http://localhost:5000/users/login', values).then(res => {
      console.log(res)
      if (res.data.message == 'Successfully logged in')
        navigate('/dashboard');
    })

  }
  return (
    <>

      <div class="container">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label><br />
            <input type="email" value={email} class="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label><br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>

      </div>
    </>
  )
}
