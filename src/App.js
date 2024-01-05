import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Users from "./components/pages/Users/Users";
import User from "./components/pages/User/User";

function App(): React.FC {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:id" element={<User />}></Route>
      </Routes>
    </div>
  );
}

export default App;
