import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate()

  async function get() {
    await axios
      .post("http://localhost:4000/login", {
        Email: email,
        // Password: password
      })
      .then((data) => {
        if(data.data.status){
          navigate(`user/${data.data.data._id}`)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <div className="container">
        <div className="mt-5">
          <div className="row" >
            <div className="col-3"></div>
            <div className="col-6">
              {/* <div className="col border border-3 border border-success p-3"> */}
              <label className="form-label">Email address </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
                name="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br></br>
              {/* <label className="form-label">Password</label>
              <input
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                type="password"
                placeholder="Password"
                name="Password"
                onChange={(e) => { setPassword(e.target.value) }}
              /> */}
              <br></br>
              <button className="btn btn-outline-success" onClick={()=>get()}>
                Login
              </button>

              <div className="text-primary text-center">
                <Link to="/register">Create an Account or Register</Link>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
