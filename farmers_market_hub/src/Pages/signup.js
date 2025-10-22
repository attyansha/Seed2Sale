import React, { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert('Passwords do not match');
      return;
    }
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-5">
        <h2 className="mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={e=>setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              value={confirm}
              onChange={e=>setConfirm(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-success w-100">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
