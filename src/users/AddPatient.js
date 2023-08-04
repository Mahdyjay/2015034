import "../AddPatient.css";

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [patient, setPatient] = useState({
    name: "",
    username: "",
    email: "",
    postcode: "",
    symptoms:""
  });

  const { name, username, email, postcode, symptoms } = patient;

  const onInputChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/patient", patient);
    navigate("/");
  };

  return (
    
     
        <div className="formContainer">
          <h2 className="patientfont">Add Patient</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="patientform">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="patientform">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="patientform">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="patientform">
              <label htmlFor="Postcode" className="form-label">
                Postcode
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Postcode"
                name="postcode"
                value={postcode}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="patientform">
              <label htmlFor="Symptoms" className="form-label">
                Symptoms
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your symptoms"
                name="symptoms"
                value={symptoms}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="submit">
              Submit
            </button>
            <Link className="cancel" to="/">
              Cancel
            </Link>
          </form>
        </div>
      
   
  );
}

