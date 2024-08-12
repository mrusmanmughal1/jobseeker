import { useUserinfo } from "../Context/AuthContext";
import { useEmployerDetails } from "../Services/Employer/useEmployerDetails";
import Annoucmentbar from "./Annoucmentbar";
import Navbar from "./Navbar";

const GeneralHeaders = () => {
  const { user_type, user_id } = useUserinfo();
  const { data } = useEmployerDetails(user_id);

  const { license_number, specialisms, country, email } =
    data?.data?.data || [];
  return (
    <div>
      <Annoucmentbar />
      <Navbar />
      {user_type == "employer" &&
      (!license_number || !specialisms || !country || !email) ? (
        <div className="py-1 font-bold text-sm bg-red-600 text-center text-white">
          Please Complete Your Profile to post jobs and View Candidates. Thanks
          you
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default GeneralHeaders;
