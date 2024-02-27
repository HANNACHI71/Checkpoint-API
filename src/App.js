import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
// import Users from "./Pages/Users";
// import Error from "./Pages/Error";
import UsersList from "./Components/UserList";
import Private from "./Routes/PrivateRouter";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <NavBar />
      <h1>WS React API</h1>
      <h1>{isAuth}</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Users" element={<UsersList />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Admin" element={<Private isAuth={isAuth} />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
