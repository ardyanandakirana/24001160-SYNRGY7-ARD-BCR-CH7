import React from "react";
import "./style.css";

const Login: React.FC = () => {

  return (
    <div className="login-container">
      <div className="grid-container">
        <div className="grid-item image-container">
          <img src="img/7604a9eda79ef119b2c8196e3c8773d3.png"/>
        </div>
        <div className="grid-item form-container">
          <form>
            <img src=""></img>
            <div className="form-group">
                <h1>Welcome, Admin BCR</h1>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
