import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NewLeave from "./pages/ApplyLeave";
import ApprovalPage from "./pages/ApprovalPage";
import NoPage from "./pages/NoPage";
import AddEmloyee from "./pages/Admin/AddEmployee";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="approval" element={<ApprovalPage />} />
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element ={<NoPage />}/>
        <Route path="newleave" element={<NewLeave />} />
        <Route path="add" element={<AddEmloyee/>}/>
      </Routes>
    </BrowserRouter>
  );
}

