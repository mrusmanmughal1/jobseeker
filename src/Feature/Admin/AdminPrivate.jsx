import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../../UI/Layouts/AdminDashboard";
import AdminNavbar from "../../UI/AdminNavbar";
import Admin from "./Admin";

const AdminPrivate = () => {
  return (
    <div>
      <AdminNavbar />
        
     <AdminDashboard/>
    </div>
  );
};

export default AdminPrivate;
