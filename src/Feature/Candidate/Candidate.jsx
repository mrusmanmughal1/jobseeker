import { NavLink, useNavigate } from "react-router-dom";
import CandidateProfile from "../../UI/CandidateProfile";
import FeaturedJobs from "../../UI/FeaturedJobs";
import ImageBanner from "../../UI/ImageBanner";
import JobSearchbar from "../../UI/JobSearchbar";
import SearchFilter from "../../UI/SearchFilter";
import { useAllCandidates } from "../../Services/Candidate/useCandidateList";
import Loader from "../../UI/Loader";
import ErrorMsg from "../../UI/ErrorMsg";
import { useEffect, useState } from "react";
import { useUserinfo } from "../../Context/AuthContext";
import { EMPLOYER } from "../../utils/Constants";
import { useSearchCandidates } from "../../Services/Employer/useSearchCandidates";
import { FaSearch } from "react-icons/fa";

const Candidate = () => {
  const navigate = useNavigate();
  const { auth, user_type } = useUserinfo();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth, navigate]);

  if (user_type === EMPLOYER) {
    return <Candidates />;
  } else {
    navigate("/login");
  }
};

export default Candidate;

export const Candidates = () => {
  const [searched, setSearch] = useState();
  const [keyword, setkeyword] = useState();
  const handleChange = (e) => {
    setkeyword(e.target.value);
  };
  const {
    data: SearchedData,
    isLoading: searchLoad,
    isError: LoadError,
  } = useSearchCandidates(searched);
  const click = () => {
    if (keyword.trim() === "") return;
    setSearch(`keywords=${keyword}`);
  };
  const { data, isLoading, isError } = useAllCandidates();

  if (isLoading && searchLoad) return <Loader style="py-40" />;
  if (isError && LoadError)
    return (
      <ErrorMsg ErrorMsg="Unable To fetch Data Right Now !  Please try again!" />
    );
  const candidatesData = SearchedData?.data?.results || data?.data?.results;
  return (
    <div className=" bg-purple-50">
      <ImageBanner text="Candidates List" />
      <div className="flex flex-col   pb-20 lg:flex-row gap-10 mt-16 w-11/12 mx-auto  ">
        <div className="w-full lg:w-[25%] order-2 lg:order-none ">
          <SearchFilter setSearch={setSearch} />
          <FeaturedJobs />
        </div>
        <div className=" w-full lg:w-[75%]">
          <div className="">
            <div
              className={`rounded-sm md:flex  items-end sm:flex-row pt-3 px-2 pb-2 md:gap-4 bg-blurr-bg`}
            >
              <div className="text-sm w-full">
                <p className="text-white pb-2 font-semibold">
                  {" "}
                  Search Candidates{" "}
                </p>
                <div className="flex items-center rounded-md justify-center bg-white px-2">
                  <FaSearch className="text-btn-primary" />
                  <input
                    type="text rounded-md"
                    name="keywords"
                    onChange={handleChange}
                    className="p-5 pe-16 outline-none w-full rounded-md"
                    placeholder="Key Word / Job Profession"
                  />
                </div>
              </div>

              <div className="flex justify-end items-end  ">
                <button
                  onClick={() => click()}
                  className="px-10 text-sm rounded-md font-bold text-white py-5 bg-[#4e007a]"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          {candidatesData?.length == 0 ? (
            <ErrorMsg ErrorMsg={"Sorry  ! No  Record Found "} />
          ) : (
            candidatesData?.map((val, i) => {
              return (
                <div key={val?.id} className=" w-full pt-5">
                  <NavLink to={`/Candidate-Details/${val?.id}`}>
                    <CandidateProfile candidateData={val} />
                  </NavLink>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
