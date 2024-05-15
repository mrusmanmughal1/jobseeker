import { BiWorld } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";

const SimilarJobs = () => {
  const ar = [1, 2, 3];
  return (
    <div className="shadow py-8  bg-white rounded-md">
      <div className="text-2xl font-semibold pb-5 px-4">SILIMAR JOBS</div>
      <div className=" border-b border-t">
        {ar.map((val, i) => {
          return (
            <div
              className="flex flex-col gap-2 p-4 border-b hover:bg-purple-50 hover:border-t-2 hover:border-btn-primary hover:duration-700 hover:border-b-slate-300"
              key={i}
            >
              <p className="uppercase font-semibold">Project Manager</p>
              <div className="flex justify-between">
                <div className=" text-sm flex  items-center gap-1">
                  <BiWorld /> Lahore , Pakistan{" "}
                </div>
                <div className=" text-btn-primary flex gap-1 items-center text-sm">
                  {" "}
                  <CiClock2 />
                  Contract{" "}
                </div>
              </div>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                quidem iure harum vitae aspernatur atque molestiae autem ad quos
                eveniet!
              </p>
            </div>
          );
        })}
      </div>
      <div className="text-center pt-6">
        <button className="bg-btn-primary text-white font-semibold px-4  py-2 rounded-md">
          VIEW MORE{" "}
        </button>
      </div>
    </div>
  );
};

export default SimilarJobs;
