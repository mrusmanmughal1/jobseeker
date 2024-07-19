import { NavLink } from "react-router-dom";
import { useCandidateDetails } from "../../Services/Candidate/useCandidateDetails";
import Loader from "../../UI/Loader";
import ErrorMsg from "../../UI/ErrorMsg";

const MyProfileCandidate = () => {
  const {
    data: Candidates,
    isLoading: isLoadingCandidates,
    isError,
  } = useCandidateDetails();

  if (isLoadingCandidates) return <Loader style="pt-20" />;
  if (isError)
    return (
      <ErrorMsg ErrorMsg="Sorry ! unable to fetch Data right now Please Try Again later " />
    );
  const { first_name, last_name, email, dob, phone, country, city, salary } =
    Candidates?.data?.data;

  return (
    <div className="   w-full  md:w-3/4   ">
      <div className="  flex justify-between   ">
        <p className="text-3xl font-semibold  tracking-wider">
          ACCOUNT INFORMATION
        </p>
        <NavLink
          to="/dashboard/profile"
          className="text-btn-primary hover:font-medium duration-500"
        >
          {" "}
          Edit
        </NavLink>
      </div>
      <div className="flex gap-10 sm:gap-24 py-8">
        <div className="w-full">
          <ul className="flex  font-semibold flex-col gap-8">
            <li>Email</li>
            <li>First Name</li>
            <li>Last name</li>
            <li>City</li>
            <li>Country</li>
            <li>Phone</li>
            <li>Minimum Salary</li>
          </ul>
        </div>
        <div className="w-full">
          <ul className="flex flex-col gap-8">
            <li>{email}</li>
            <li>{first_name}</li>
            <li>{last_name}</li>
            <li>{city}</li>
            <li>{country}</li>
            <li>{phone}</li>
            <li>{salary}</li>
          </ul>
        </div>
      </div>
      <div className=" border-t  pt-5 flex flex-col gap-4">
        <p className="tracking-wider text-3xl font-semibold">
          APPLICATION HISTORY
        </p>
        <p className="text-sm">
          You have applied for 3 jobs in the past 30 days. &nbsp;
          <a href="" className="text-btn-primary">
            View application
          </a>
        </p>
      </div>
    </div>
  );
};

export default MyProfileCandidate;
