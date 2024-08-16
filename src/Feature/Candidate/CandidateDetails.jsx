import CandidateContact from "./CandidateContact";
import Button from "../../Reuseables/Button";
import { useCandidateDetail } from "../../Services/Employer/useCandidateDetail";
import { useParams } from "react-router-dom";
import Loader from "../../UI/Loader";
import ErrorMsg from "../../UI/ErrorMsg";
import { IoIosChatboxes } from "react-icons/io";
import { useChatContext } from "../../Context/ChatContext";
import Model from "../../Reuseables/Model";
import MessageCandidates from "./MessageCandidates";
import { useState } from "react";
import { BASE_URL, BASE_URL_IMG } from "../../config/Config";

const CandidateDetails = () => {
  const [mode, setmodel] = useState(false);

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
    username,
    id: idd,
  } = data?.data?.data || {};
  const { show, setshow, dispatch } = useChatContext();
  const hanldeChat = () => {
    const rec = `user_id${username}${idd}`;
    const Receiver_user_id = rec.replace(/ /g, "_");
    // setshow(!show);
    const R_ID = {
      Receiver_user_id: Receiver_user_id,
      Recever_id: idd,
    };

    setmodel(true);
    dispatch({ type: "Receiver", payload: R_ID });
  };
  return (
    <div>
      <div className="candidate-man relative  ">
        <div className="absolute inset-0 bg-black   opacity-80 "></div>
        <div className="w-11/12 mx-auto ">
          <div className=" relative text-white py-14 md:py-20 flex  md:justify-between  md:items-center flex-col items-start gap-8  md:flex-row  ">
            <div className="  flex-1  ">
              <div className=" py-4 border-b border-white flex flex-col gap-4">
                <img
                  src={avatar_image ? BASE_URL_IMG + avatar_image : ""}
                  alt=""
                  width={200}
                />
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
                    <a href={BASE_URL + cv_file} download>
                      DOWNLOAD CV
                    </a>
                  </Button>
                  {/* <Button>View CV</Button> */}
                  <button
                    onClick={hanldeChat}
                    className="bg-btn-primary p-2 px-4 rounded-md text-3xl"
                  >
                    <IoIosChatboxes />
                  </button>
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
              download={BASE_URL + cv_file}
            />
          </div>
        </div>
      </div>
      <Model model={mode}>
        <MessageCandidates
          RecUserName={username}
          RecvID={idd}
          Recfirst_name={first_name}
          Reclast_name={last_name}
          setmodel={setmodel}
          url={BASE_URL + avatar_image}
        />
      </Model>
    </div>
  );
};

export default CandidateDetails;
