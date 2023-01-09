import { useState, useRef } from "react";
import axios from "axios";
import SimpleReactValidator from "simple-react-validator";

const Posts = () => {
  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState("");

  const [email, setEmail] = useState("");
  const [qualifications, setqualifications] = useState("");
  // const [password, setPassword] = useState("");
  const [workHistory, setWorkHistory] = useState("");
  const [interestsHobbies, setInterestsHobbies] = useState("");
  const [availabilityDate, setAvailabilityDate] = useState("");
  const [name, setName] = useState("");

  const submit = () => {
    if (validator.current.allValid()) {
      alert("You submitted the form and stuff!");
      post();
    } else {
      validator.current.showMessages();
      forceUpdate();
    }
  };

  const post = async () => {
    console.log()
    await axios.post("http://localhost:4000/register", 
    {
        Email: email,
        // Password: password,
        WorkHistory: workHistory,
        InterestsHobbies: interestsHobbies,
        AvailabilityDate: availabilityDate,
        Qualifications: qualifications,
        FirstName: name
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container p-1">
      <h1 className="text-center m-5">Register</h1>
      <div className="row g-3 form">
          <div className="col-md-6">
          <label className="form-label">Full Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              name="Full Name"
              type="text"
              className="form-control"
              placeholder="Full Name"
            />
            {validator.current.message("name", name, "required")}
          </div>

        <div className="col-md-6">
          <label className="form-label">Qualifications</label>
          <input
            onChange={(e) => setqualifications(e.target.value)}
            name="Qualifications"
            type="text"
            className="form-control"
            placeholder="Qualifications"
          />
          {validator.current.message("Qualifications", qualifications, "required")}
        </div>

        <div className="col-md-6">
          <label className="form-label">Work History</label>
          <input
            onChange={(e) => setWorkHistory(e.target.value)}
            name="WorkHistory"
            type="text"
            className="form-control"
            placeholder="Work History"
          />
          {validator.current.message(
            "title",
            workHistory,
            "required"
          )}
        </div>

        <div className="col-md-6">
          <label className="form-label">Interests & Hobbies</label>
          <input
            onChange={(e) => setInterestsHobbies(e.target.value)}
            name="Interests&Hobbies"
            type="text"
            className="form-control"
            placeholder="Interests & Hobbies"
          />
          {validator.current.message(
            "title",
            interestsHobbies,
            "required"
          )}
        </div>

        
        <div className="col-md-6">
          <label className="form-label">Availability Date</label>
          <input
            onChange={(e) => setAvailabilityDate(e.target.value)}
            name="AvailabilityDate"
            type="date"
            className="form-control"
            placeholder="date"
          />
          {validator.current.message("AvailabilityDate", availabilityDate, "required")}
        </div>

        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            name="Email"
            type="email"
            className="form-control"
            placeholder="XYZ@example.com"
          />
          {validator.current.message("Email", email, "required")}
        </div>
        {/* <div className="col-md-12">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="Password"
            type="password"
            className="form-control"
            placeholder="Password"
          />
          {validator.current.message("title", password, "required|regex")}
        </div> */}


        <div className="col-12 text-center">
          <button type="Register" onClick={submit} className="btn btn-primary">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
