import { TiArrowSortedUp } from "react-icons/ti";
const SearchFilter = () => {
  return (
    <div className="  shadow-lg shadow-slate-350 mb-4 py-2 bg-white rounded-sm">
      {/* accoridian no 1  */}
      <div className="   text-black border-b">
        <div className="relative w-full  overflow-hidden">
          <input
            type="checkbox"
            className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
          />
          <div className="bg-white h-12 w-full pl-5 flex items-center">
            <h1 className="text-lg  font-semibold  text-btn-primary">SEARCH</h1>
          </div>
          <div className=" absolute  top-3 right-3 text-white transition-transform duration-500 rotate-90 peer-checked:rotate-180 ">
            <TiArrowSortedUp className="text-btn-primary" />
          </div>
          <div className=" bg-white overflow-hidden transition-all duration-500  max-h-0 peer-checked:max-h-40 ">
            <div className="p-4">
              <input
                type="text"
                className="w-full py-2 border px-3 text-xs bg-slate-200 rounded-md "
                placeholder="Search Name..."
              />
            </div>
          </div>
        </div>
      </div>

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
          <div className=" bg-white overflow-hidden transition-all duration-700 text-xs  max-h-60 peer-checked:max-h-0   ">
            <div className="px-4 py-2 flex gap-4 ">
              <input type="checkbox" className="bg-slate-500" />
              Accounting
            </div>
            <div className="px-4 py-2 flex gap-4 ">
              <input type="checkbox" className="bg-slate-500" />
              Accounting
            </div>
            <div className="px-4 py-2 flex gap-4 ">
              <input type="checkbox" className="bg-slate-500" />
              Accounting
            </div>
            <div className="px-4 py-2 flex gap-4 ">
              <input type="checkbox" className="bg-slate-500" />
              Accounting
            </div>
            <div className="px-4 py-2 flex gap-4 ">
              <input type="checkbox" className="bg-slate-500" />
              Accounting
            </div>
            <div className="px-4 py-2 flex gap-4 ">
              <input type="checkbox" className="bg-slate-500" />
              Accounting
            </div>
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
            <div className="px-4 py-2 flex gap-4 ">
              <input type="checkbox" className="bg-slate-500" />
              Last 6 hours
            </div>
            <div className="px-4 py-2 flex gap-4 ">
              <input type="checkbox" className="bg-slate-500" />
              Last 6 hours
            </div>
            <div className="px-4 py-2 flex gap-4 ">
              <input type="checkbox" className="bg-slate-500" />
              Last 6 hours
            </div>
            <div className="px-4 py-2 flex gap-4 ">
              <input type="checkbox" className="bg-slate-500" />
              Last 6 hours
            </div>
            <div className="px-4 py-2 flex gap-4 ">
              <input type="checkbox" className="bg-slate-500" />
              Last 6 hours
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
