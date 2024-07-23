import { useUserinfo } from "../../Context/AuthContext";
import { EMPLOYER } from "../../utils/Constants";
import MyProfileCandidate from "../Candidate/MyProfileCandidate";
import MyProfileEmployers from "../Employer/MyProfileEmployers";

const MyAccount = () => {
  const { user_type } = useUserinfo();

  if (user_type === EMPLOYER) {
    return <MyProfileEmployers />;
  } else {
    return <MyProfileCandidate />;
  }
};

export default MyAccount;
