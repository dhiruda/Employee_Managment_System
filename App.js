import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import GetEmployee from './GetEmployee';
import AddEmployee from './AddEmployee';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import ServicesUs from './ServicesUs';
import AdminDashboard from './AdminDashboard';
import EmployeeDashboard from './EmployeeDashboard';
import RegistrationForm from './RegistrationForm';
import PrivateRoute from './PrivateRoute';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/servicesus" element={<ServicesUs />} />

          {/* Protected Routes */}
          <Route
            path="/admindashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/employeeDashboard"
            element={
              <PrivateRoute>
                <EmployeeDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/getEmployee"
            element={
              <PrivateRoute>
                <GetEmployee />
              </PrivateRoute>
            }
          />
          <Route
            path="/addEmployee"
            element={
              <PrivateRoute>
                <AddEmployee />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
