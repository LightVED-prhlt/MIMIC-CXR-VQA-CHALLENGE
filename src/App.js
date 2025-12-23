import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import LatestNews from "./pages/LatestNews";
import Registration from "./pages/Registration";
import Participate from "./pages/Participate";
import TaskDescription from "./pages/TaskDescription";
import DataSet from "./pages/DataSet";
import Assessment from "./pages/Assessment";
import Submission from "./pages/Submission";
import ChallengeRulesPolicies from "./pages/ChallengeRulesPolicies";
import Leaderboard from "./pages/Leaderboard";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout">
        <Navbar />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/LatestNews" element={<LatestNews />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Participate" element={<Participate />} />
            <Route path="/TaskDescription" element={<TaskDescription />} />
            <Route path="/DataSet" element={<DataSet />} />
            <Route path="/Assessment" element={<Assessment />} />
            <Route path="/Submission" element={<Submission />} />
            <Route path="/ChallengeRulesPolicies" element={<ChallengeRulesPolicies />} />
            <Route path="/Leaderboard" element={<Leaderboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
