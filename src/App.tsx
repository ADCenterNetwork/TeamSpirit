import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/homePage/HomePage";
import LoginPage from "./components/loginPage/LoginPage";
import Survey from "./components/survey/Survey";
import ExitPage from "./components/exitPage/ExitPage";
import PrivateRoute from "./auth/PrivateRoute";
import { AuthContext } from "./context/auth";
import TeamHomePage from "./components/teamHomePage/TeamHomePage";
import MyTeamsPage from "./components/myTeams/myTeamsPage";

function App() {
  const [valid, setValid] = useState(false);
  const [myTeams, setMyTeams] = useState([{ Name: "" }]);
  const [currentTeam, setCurrentTeam] = useState("");
  const [surveyCode, setSurveyCode] = useState("");
  //here we set the context variables, and provide the context to the hole APP
  return (
    <AuthContext.Provider
      value={{
        valid: valid,
        setValid: setValid,
        surveyCode: surveyCode,
        setSurveyCode: setSurveyCode,
        myTeams: myTeams,
        setMyTeams: setMyTeams,
        currentTeam: currentTeam,
        setCurrentTeam: setCurrentTeam,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/success" element={<ExitPage />} />
          <PrivateRoute
            path="/survey"
            element={<Survey />}
            alternativePath="/"
          />
          <PrivateRoute
            path="/teamleader"
            element={<TeamHomePage />}
            alternativePath="/"
          />
          <PrivateRoute
            path="/myTeams"
            element={<MyTeamsPage />}
            alternativePath="/"
          />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
