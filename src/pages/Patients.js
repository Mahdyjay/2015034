import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../PatientsHome.css";

export default function Patients() {
  const [patients, setPatients] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    const result = await axios.get("http://localhost:8080/patients");
    setPatients(result.data);
  };

 

  

  return (
      <div className="PatientsTable">
  {patients.map((patient, index) => (
    <div className="PatientRow" key={index}>
      <div className="PatientID">ID: {index + 1}</div>
      <div className="PatientName">Name: {patient.name}</div>
      <div className="PatientUsername">Username: {patient.username}</div>
      <div className="PatientEmail">Email: {patient.email}</div>
      <div className="PatientPostcode">Postcode: {patient.postcode}</div>
      <div className="PatientSymptoms">Symptoms: {patient.symptoms}</div>
      <div className="PatientActions">
        <Link className="View" to={`/viewpatient/${patient.id}`}>
          View
        </Link>
        
      </div>
    </div>
  ))}
</div>

   
  );
}


