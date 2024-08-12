import { TiArrowSortedUp } from "react-icons/ti";
import { useSpecialization } from "../Services/General/useSpecialization";
import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";
const SearchFilter = ({ setSearch }) => {
  const {
    data: Specialization,
    isLoading,
    status,
    isError,
  } = useSpecialization();
  if (isLoading) return <Loader style="py-40" />;
  if (isError)
    return (
      <ErrorMsg ErrorMsg="Unable To fetch Data Right Now !  Please try again!" />
    );

  const Last_Activity = [
    "30_days",
    "7_days",
    "24_hours",
    "12_hours",
    "6_hours",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch((prev) => {
      const newSearch = new URLSearchParams(prev);

      if (newSearch.has(name)) {
        const values = newSearch.getAll(name);
        if (values.includes(value)) {
          newSearch.delete(name, value);
        } else {
          newSearch.append(name, value);
        }
      } else {
        newSearch.append(name, value);
      }

      return newSearch.toString();
    });
  };
  return (
    <div className="  shadow-lg shadow-slate-350 mb-4 py-2 bg-white rounded-sm">
      {/* accoridian no 2  */}

      <div className="    text-black border-b">
        <div className="relative w-full    overflow-hidden">
          <input
            type="checkbox"
            className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
          />
          <div className="bg-white h-12 w-full pl-5 flex items-center">
            <h1 className="text-lg  font-semibold uppercase  text-btn-primary">
              Specialization
            </h1>
          </div>
          <div className=" absolute  top-3 right-3 text-white transition-transform duration-500 rotate-180 peer-checked:rotate-90 ">
            <TiArrowSortedUp className="text-btn-primary" />
          </div>
          <div className=" bg-white overflow-hidden transition-all duration-700 text-xs  max-h-max peer-checked:max-h-0   ">
            {Specialization?.data?.specializations?.map((val, i) => {
              return (
                <div key={val} className="px-4 py-2 flex gap-2 ">
                  <input
                    type="checkbox"
                    id={val}
                    name="job_interest"
                    onChange={handleChange}
                    className="bg-slate-500 hover:cursor-pointer"
                    value={val}
                  />
                  <label htmlFor={val}>{val}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* accoridian no 3  */}

      <div className=" text-black">
        <div className="relative w-full overflow-hidden">
          <input
            type="checkbox"
            className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
          />
          <div className="bg-white h-12 w-full pl-5 flex items-center">
            <h1 className="text-lg  font-semibold  text-btn-primary">
              LAST ACTIVITY
            </h1>
          </div>
          <div className=" absolute  top-3 right-3 text-white transition-transform duration-500 rotate-90 peer-checked:rotate-180 ">
            <TiArrowSortedUp className="text-btn-primary" />
          </div>
          <div className=" bg-white overflow-hidden text-xs transition-all duration-500  max-h-0 peer-checked:max-h-40    ">
            {Last_Activity.map((val, i) => {
              return (
                <div key={val} className="px-4 py-2 flex gap-4 ">
                  <input
                    type="checkbox"
                    id={val}
                    name="last_activity"
                    onChange={handleChange}
                    className="bg-slate-500 hover:cursor-pointer"
                    value={val}
                  />
                  <label htmlFor={val}>
                    Last {val.replace(/_/g, " ")} Activity
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
