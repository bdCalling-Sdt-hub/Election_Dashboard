import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DonationHistory from "./Pages/Dashboard/DonationHistory";
import Notification from "./Pages/Dashboard/Notification";
import Otp from "./Pages/Auth/Otp";
import Login from "./Pages/Auth/Login";
import UpdatePassword from "./Pages/Auth/UpdatePassword";
import NotFound from "./404";
import PrivateRoute from "./routes/PrivateRoute";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import UserDetailsList from "./Pages/Dashboard/VoterIssues";
import AdminProfile from "./Pages/Dashboard/AdminProfile";
import Disclaimer from "./Pages/Dashboard/Privacy";
import Terms from "./Pages/Dashboard/Terms";

import Feedbacks from "./Pages/Dashboard/Feedbacks";
import SubscriberDetails from "./Pages/Dashboard/SubscriberDetails";
import AddCandidate from "./Pages/Dashboard/AddCandidate";
import FAQ from "./Pages/Dashboard/FAQ";
import About from "./Pages/Dashboard/About";
import AboutElection from "./Pages/Dashboard/AboutElection";
import CandidateDetails from "./Pages/Dashboard/CandidateDetails";
import AddCandidateIssues from "./Pages/Dashboard/AddCandidateIssues";
import State from "./Pages/Dashboard/State";
import Election from "./Pages/Dashboard/Election";
import LatestNews from "./Pages/Dashboard/LatestNews";
import AddLatestNews from "./Pages/Dashboard/AddLatestNews";


function App() {
  return (
    <>
      <div className="maincontainer">
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/" element={<DonationHistory />} />
              <Route path="/voters-issues" element={<UserDetailsList />} />
              <Route path="/feedbacks" element={<Feedbacks />} />
              <Route path="/subscriber-details" element={<SubscriberDetails />} />
              <Route path="/add-candidate" element={<AddCandidate />} />
              <Route path="/add-state" element={<State />} />
              <Route path="/add-election" element={<Election />} />
              <Route path="/candidate-details" element={<CandidateDetails />} /> 
              <Route path="/candidate-issues" element={<AddCandidateIssues/>} />
              <Route path="/about-elections" element={<AboutElection />} />
            
              <Route path="/notification" element={<Notification />} />
             
              <Route path="/admin-profile" element={<AdminProfile />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Disclaimer />} />          
              <Route path="/terms" element={<Terms />} />
              <Route path="/latest-news" element={<LatestNews />} />
              <Route path="/add-latest-news" element={<AddLatestNews />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/update-password" element={<UpdatePassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
