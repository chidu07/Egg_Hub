import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";

import Viewtask from "./component/Viewtask";

import Profile from "./component/Profile";
import Login from "./component/Login";
import Sighnin from "./component/Sighnin";

import Home from "./user/Home";
import Userviewtask from "./user/Userviewtask";

import About from "./component/About";
import Contact from "./component/Contact";
import Logout from "./component/Logout";
import Logo from "./component/Logo";
import Eggrate from "./component/Eggrate";
import Updatedriver from "./user/Updatedriver";

import Logos from "./user/Logos";
import Upage from "./user/Upage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/layout" element={<Layout />} />

          <Route path="/viewtask" element={<Viewtask />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/sighnin" element={<Sighnin />} />

          <Route path="/home" element={<Home />} />
          <Route path="/userview" element={<Userviewtask />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/logout" element={<Logo />} />
          <Route path="/eggrate" element={<Eggrate />} />
          <Route path="/updatedriver" element={<Updatedriver />} />
          <Route path="/upage" element={<Upage />} />

          <Route path="/logos" element={<Logos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
