import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Login from "./component/User/Login";
import Landing from "./component/Landing";
import Signup from "./component/User/Signup";

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
