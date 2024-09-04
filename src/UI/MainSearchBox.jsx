import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAutoCountry,
  useAutoSuggestion,
} from "../Services/General/useAutoSuggestion";
import { useDebounce } from "use-debounce";

const MainSearchBox = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [isRemote, setIsRemote] = useState(false);
  const [show, setshow] = useState({
    ShowtitleSuggestions: false,
    ShowLocationsSuggestions: false,
  });
  const { ShowtitleSuggestions, ShowLocationsSuggestions } = show;
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  const [debouncedTitle] = useDebounce(title, 1000);
  const [debouncedLocation] = useDebounce(location, 1000);
  const { data, isLoading: loadTitle } = useAutoSuggestion(debouncedTitle);
  const { data: country, isLoading: loadcountry } =
    useAutoCountry(debouncedLocation);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
      setshow({
        ShowtitleSuggestions: true,
      });
    } else if (name === "locations") {
      setLocation(value);
      setshow({
        ShowLocationsSuggestions: true,
      });
    }
  };

  const handleRemoteChange = (e) => {
    setIsRemote(e.target.checked);
  };

  const handleSearch = () => {
    // Construct query parameters
    const queryParams = new URLSearchParams({
      title,
      location,
      isRemote,
    }).toString();

    // Redirect to jobs page with query params
    navigate(`/jobs?${queryParams}`);
  };
  // Set isVisible to true when the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`flex-col rounded-sm md:flex sm:flex-row pt-3 px-2 pb-2 md:gap-4 bg-blurr-bg 
    
    `}
    >
      <div className="text-sm w-full">
        <p className="text-white"> Job Title </p>
        <div className="flex items-center rounded-md bg-white px-2 relative">
          <FaSearch className="text-btn-primary" />
          <input
            type="text rounded-md"
            value={title}
            name="title"
            onChange={(e) => handleChange(e)}
            className="p-5 pe-16 outline-none w-full rounded-md"
            placeholder="Key Word / Job Title"
          />
        </div>
        <div className="relative">
          {ShowtitleSuggestions && title && (
            <div className="absolute -left-2 top-3 w-72 p-2 ps-4 opacity-95 bg-white shadow-2xl rounded-md py-6">
              <div>
                {data?.data?.suggestions && !loadTitle ? (
                  data.data.suggestions.map((val) => (
                    <div
                      key={val}
                      onClick={() => {
                        setTitle(val);
                        setshow({
                          ShowtitleSuggestions: false,
                        });
                      }}
                      className="flex items-center cursor-pointer text-base gap-3 hover:bg-slate-100 py-2 max-h-20"
                    >
                      <FaSearch />
                      <p>{val}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">
                    {"No data Available "}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* locations  */}
      <div className="text-sm w-full">
        <p className="text-white">Where</p>
        <div className="">
          <input
            type="text"
            value={location}
            autoComplete={false}
            name="locations"
            onChange={handleChange}
            className="p-5 outline-none rounded-md border px-10 w-full"
            placeholder="Location"
          />
        </div>
        <div className="relative">
          {ShowLocationsSuggestions && !loadcountry && (
            <div className="absolute -left-2 top-3 w-72 p-2 ps-4 opacity-95 bg-white shadow-2xl rounded-md py-6">
              <div>
                {country?.data?.suggestions?.length > 0 ? (
                  country.data.suggestions.map((val) => (
                    <div
                      key={val}
                      onClick={() => {
                        setLocation(val);
                        setshow({
                          ShowLocationsSuggestions: false,
                        });
                      }}
                      className="flex items-center cursor-pointer text-base gap-3 hover:bg-slate-100 py-2 max-h-20"
                    >
                      <FaSearch />
                      <p>{val}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">No data</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className=" flex flex-col sm:gap-0   gap-4">
        <div className="flex gap-1  items-center mt-2 sm:mt-0 ">
          <input
            type="checkbox"
            className="text-black"
            name="isRemote"
            id="remote"
            checked={isRemote}
            onChange={(e) => handleRemoteChange(e)}
          />
          <label htmlFor="remote" className="text-sm text-white">
            Remote Only
          </label>
        </div>
        <button
          onClick={() => handleSearch()}
          className="px-10 text-sm rounded-md font-bold text-white py-5 bg-[#4e007a]"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default MainSearchBox;
