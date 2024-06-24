import { useUserinfo } from "../Context/Userinfo";
import AdminNavbar from "./AdminNavbar";
import GeneralHeaders from "./GeneralHeaders";

const Header = () => {
  const { user_type } = useUserinfo();
  return <>{user_type == "administrator" ? <AdminNavbar /> : <GeneralHeaders />}</>;
};

export default Header;
