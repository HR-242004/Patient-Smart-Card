import React from 'react'

const Register = () => {
  return (
    <div>
      <form action="POST">
        <label>
          Full Name:
          <input type="text" name="fullname" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" required />
        </label>
        <input type="submit" value="Register" />
        <label>
        </label>
      </form>
    </div>
  )
}

export default Register
