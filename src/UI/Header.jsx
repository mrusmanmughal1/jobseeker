import { useUserinfo } from "../Context/Userinfo";
import AdminNavbar from "./AdminNavbar";
import GeneralHeaders from "./GeneralHeaders";

const Header = () => {
  const { role } = useUserinfo();
  return <>{role == "admin" ? <AdminNavbar /> : <GeneralHeaders />}</>;
};

export default Header;
