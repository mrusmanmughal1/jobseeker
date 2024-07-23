import { useUserinfo } from "../../Context/AuthContext";
import { EMPLOYER } from "../../utils/Constants";
import ManageCandidateProfile from "../Candidate/ManageCandidateProfile";
import ManageEmployerProfile from "../Employer/ManageEmployerProfile";
const Manageprofile = () => {
  const { user_type } = useUserinfo();
  if (user_type === EMPLOYER) {
    return <ManageEmployerProfile />;
  } else {
    return <ManageCandidateProfile />;
  }
};

export default Manageprofile;
