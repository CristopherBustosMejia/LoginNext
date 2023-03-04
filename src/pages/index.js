import { useState, useEffect } from 'react'
import axios from 'axios'
import { serialize } from 'cookie'
import { parse } from 'cookie'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios({
      method: 'GET',
      //body: JSON.stringify({ email, password }),
      url: `https://rickandmortyapi.com/api/character`
    })
    if (res.data != null) {
      console.log(res.data);
      if(/*logged result*/res.data != null){
        const options = {
          maxAge: 60 * 60 * 24 * 7, // 1 week
          path: '/',
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict'
        }
        const value = true;
        const serializedCookie = serialize('Logged', value, options)
        document.cookie = serializedCookie;
        console.log("Cookie set");
      }
      //send to home
    } else {
      console.log("Error");
    }
  }
  useEffect(() => {
    const cookie = parse(document.cookie)
    if( cookie['Logged'] !== null) {
      //send to home
      console.log("Logged");
    }
  },[])

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  )
}

export default Login