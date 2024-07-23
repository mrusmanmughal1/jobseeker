import CandidateContact from "./CandidateContact";
import Button from "../../Reuseables/Button";
import { useCandidateDetail } from "../../Services/Employer/useCandidateDetail";
import { useParams } from "react-router-dom";
import Loader from "../../UI/Loader";
import ErrorMsg from "../../UI/ErrorMsg";
const CandidateDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useCandidateDetail(id);
  if (isLoading) return <Loader style="py-20 h-screen" />;
  if (isError)
    return (
      <ErrorMsg
        ErrorMsg={
          error?.response?.data?.detail ||
          "Sorry Unable to fecth data try again later ... "
        }
      />
    );
  const baseurl = "http://170.187.136.161:8010";
  const {
    first_name,
    last_name,
    email,
    cv_file,
    job_interest,
    avatar_image,
    salary,
    phone,
    city,
    country,
  } = data?.data?.data || {};
  return (
    <div>
      <div className="candidate-man relative  ">
        <div className="absolute inset-0 bg-black   opacity-80 "></div>
        <div className="w-11/12 mx-auto ">
          <div className=" relative text-white py-14 md:py-20 flex  md:justify-between  md:items-center flex-col items-start gap-8  md:flex-row  ">
            <div className="  flex-1  ">
              <div className=" py-4 border-b border-white flex flex-col gap-4">
                <img src={baseurl + avatar_image} alt="" width={200} />
                <p className="text-3xl font-semibold">CANDIDATE</p>
                <p className="text-xl">
                  {first_name} {last_name}
                </p>
              </div>
              <div className="flex flex-col gap-4 pt-4 text-xl">
                <p> Expected Salary : {salary} $</p>
                <p>
                  Address : {city} {country}
                </p>
                <p> Email: {email}</p>
              </div>
            </div>
            <div className=" flex-1  flex justify-end items-center    ">
              <div className=" text-end flex flex-col gap-4 ">
                <div className="flex md:gap-4 gap-2 flex-col md:flex-row ">
                  <Button>
                    <a href={baseurl + cv_file} download>
                      DOWNLOAD CV
                    </a>
                  </Button>
                  <Button>View CV</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200  py-8 font-semibold">
        <div className="   w-11/12 mx-auto">
          Skills:{" "}
          {job_interest?.map((val, i) => (
            <span key={i}> {val} ,</span>
          ))}
        </div>
      </div>
      <div className="w-11/12 mx-auto py-10">
        <div className=" ">
          <div className=" text-4xl font-semibold pb-8">
            About{" "}
            <span className="text-btn-primary">
              {first_name} {last_name}
            </span>
          </div>
          <div className="flex  justify-between flex-col md:flex-row gap-8">
            <div className="  text-justify">{data.data.data.about}</div>
            <CandidateContact
              email={email}
              phone={phone}
              city={city}
              country={country}
              download={baseurl + cv_file}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;
