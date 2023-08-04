import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Patients";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddPatient";

import ViewUser from "./users/ViewPatient";
import Patients from "./pages/Patients";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Patients />} />
          <Route exact path="/addpatient" element={<AddUser />} />
         
          <Route exact path="/viewpatient/:id" element={<ViewUser />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
