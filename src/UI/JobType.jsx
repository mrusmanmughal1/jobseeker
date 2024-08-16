const JobType = () => {
  return (
    <div className="pb-10">
      <p className="text-purple-900 font-semibold uppercase   ">
        Employment Type
      </p>
      <div className="pb-2 text-black">
        <div className="flex gap-6 pt-1">
          <div className="">
            <input type="checkbox" name="" id="contract" />
          </div>
          <div className="">
            <label for="contract" className="text-purple-900">
              Contract (90)
            </label>
          </div>
        </div>
        <div className="flex gap-6 ">
          <div className="">
            <input type="checkbox" name="" id="" />
          </div>
          <div className="">
            <p className="text-purple-900">Full Time (90)</p>
          </div>
        </div>
        <div className="flex gap-6 ">
          <input type="checkbox" name="" id="" />

          <p className="text-purple-900">Internship (90)</p>
        </div>
        <div className="flex gap-6 ">
          <input type="checkbox" name="" id="" />

          <p className="text-purple-900">Part Time (90)</p>
        </div>
      </div>
      <hr />
      <div className="py-3">
        <p className="text-purple-900 font-semibold  pb-1 ">
          WORK AUTHORIZATION
        </p>
        <div className="flex gap-6 ">
          <input type="checkbox" name="" id="" />

          <p className="text-purple-900"> Willing to Sponsor</p>
        </div>
      </div>
      <hr />
      <div className="py-3">
        <p className="text-purple-900 font-semibold  pb-1  ">POSTED DATE</p>
        <div className="text-btn-primary space-y-2">
          <div className="border-l-purple-950 border-l-4 ps-3">Today</div>
          <div className="ps-3">7 Days Ago</div>
          <div className="ps-3">10 Days Ago</div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default JobType;
