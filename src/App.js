import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Setting from "./components/setting";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edit/:id" element={<Setting />} />
          {/* <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
