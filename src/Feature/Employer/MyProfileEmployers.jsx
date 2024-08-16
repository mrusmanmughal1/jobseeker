import { NavLink } from "react-router-dom";
import Loader from "../../UI/Loader";
import { useEmployerDetails } from "../../Services/Employer/useEmployerDetails";

const MyProfileEmployers = () => {
  const { data: Employer, isLoading: isLoadingEmployer } = useEmployerDetails();

  if (isLoadingEmployer) return <Loader style="pt-20" />;
  const { first_name, last_name, email, phone, website, vacancies } =
    Employer?.data?.data || {};
  return (
    <div className="w-full  md:w-3/4">
      <div className="flex justify-between">
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
          <ul className="flex w-32 font-semibold flex-col gap-8">
            <li>Email</li>
            <li>First Name</li>
            <li>Last name</li>
            <li>Phone</li>
            <li>Website</li>
            <li>vacancies</li>
          </ul>
        </div>
        <div className="w-full">
          <ul className="flex flex-col gap-8">
            <li>{email}</li>
            <li>{first_name}</li>
            <li>{last_name}</li>
            <li>{phone}</li>
            <li className="truncate">{website || "Null"}</li>
            <li>{vacancies}</li>
          </ul>
        </div>
      </div>
      <div className=" border-t  pt-5 flex flex-col gap-4">
        <p className="tracking-wider text-3xl font-semibold">
          APPLICATION HISTORY
        </p>
        <p className="text-sm">
          Candidates have applied 1 jobs in the past 30 days. &nbsp;
          <a href="" className="text-btn-primary">
            View application
          </a>
        </p>
      </div>
    </div>
  );
};

export default MyProfileEmployers;
