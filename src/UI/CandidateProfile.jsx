import { BASE_URL_IMG } from "../config/Config";

const CandidateProfile = ({ candidateData }) => {
  const url =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  return (
    <div className="shadow-md  bg-white p-6 w-full">
      <div className="border p-2">
        <div className="flex gap-4 items-center">
          <img
            src={
              candidateData?.avatar_image
                ? BASE_URL_IMG + candidateData?.avatar_image
                : url
            }
            alt=""
            className="w-20 h-20 object-contain"
          />
          <div className="flex  items-center gap-5">
            <div className="">
              <p className="font-semibold text-xl">{candidateData?.username}</p>
              <p>{candidateData?.country}</p>
            </div>
            <div className="flex justify-center items-center">
              <p>
                {candidateData?.specialization?.map((val, i) => (
                  <span key={i}> {val}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
