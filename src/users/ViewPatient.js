import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../ViewPatient.css";
import { useNavigate } from "react-router-dom";

export default function ViewUser() {
  let navigate = useNavigate();
  const [patient, setPatient] = useState({
    name: "",
    username: "",
    email: "",
    postcode: "",
    symptoms: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadPatient();
  }, []);

  const loadPatient = async () => {
    const result = await axios.get(`http://localhost:8080/patient/${id}`);
    setPatient(result.data);
  };

  const onClick = async () => {
    await axios.delete(`http://localhost:8080/patient/${id}`);
    navigate("/"); 
  };

  return (
    <div className="container">
      <h2 className="patientdetail">Patient Details</h2>

      
        
          <div className="card">
            <div className="card-header">Details of patient: {patient.id}</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Name:</b> {patient.name}
              </li>
              <li className="list-group-item">
                <b>UserName:</b> {patient.username}
              </li>
              <li className="list-group-item">
                <b>Email:</b> {patient.email}
              </li>
              <li className="list-group-item">
                <b>Postcode:</b> {patient.postcode}
              </li>
              <li className="list-group-item">
                <b>Symptoms:</b> {patient.symptoms}
              </li>
            </ul>
          </div>
        
      

      <div className="actionbutton">
        
          <button type="button" className="deletepatient" onClick={onClick}>
            Delete
          </button>
          <Link className="backhome" to={"/"}>
            Back to Home
          </Link>
      
      </div>
    </div>
  );
}
