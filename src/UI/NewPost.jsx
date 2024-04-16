const NewPost = () => {
  return (
    <div className="w-full md:w-3/5">
      <form action="">
        <div className="flex w-full flex-col gap-4">
          <p className="mb-4 font-semibold uppercase text-2xl">Contact Type</p>
          <div className="md:flex grid  grid-cols-2  gap-4">
            <div className="div flex items-center gap-2">
              <input type="radio" name="contract_type" id="Contract" />
              <label htmlFor="Contract">Contract</label>
            </div>
            <div className="div flex items-center gap-2">
              <input type="radio" name="contract_type" id="ft" />
              <label htmlFor="ft">Full Time</label>
            </div>

            <div className="div flex items-center gap-2">
              <input type="radio" name="contract_type" id="int" />
              <label htmlFor="int">Internshop </label>
            </div>

            <div className="div flex items-center gap-2">
              <input type="radio" name="contract_type" id="pt" />
              <label htmlFor="pt">Part Time</label>
            </div>
          </div>
          <div className=" w-full">
            <p>Job Title</p>

            <input
              type="text"
              className="w-full p-2 bg-slate-300 "
              placeholder="Job Title"
            />
          </div>
          <div className=" py-2">
            <p>Remote Work </p>
            <div className="flex gap-4">
              <input type="checkbox" name="" id="" />
              Yes
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="w-[32%]">
              <div className="flex   flex-col gap-3">
                <label htmlFor="">Job Address</label>
                <input type="text" className="border p-2 bg-gray-300" />
              </div>
            </div>
            <div className="w-[32%]">
              <div className="flex   flex-col gap-3">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  placeholder="CIty"
                  className="border p-2 bg-gray-300"
                />
              </div>
            </div>
            <div className="w-[32%]">
              <div className="flex  flex-col gap-3">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  placeholder="CIty"
                  className="border p-2 bg-gray-300"
                />
              </div>
            </div>
          </div>
          <div className="div flex flex-col gap-4">
            <div className="">
              <p>Duration </p>

              <input
                type="text"
                className="w-full p-2 bg-slate-300 "
                placeholder="Job Title"
              />
            </div>
            <div className="">
              <p>Rate </p>

              <input
                type="text"
                className="w-full p-2 bg-slate-300 "
                placeholder="Job Title"
              />
            </div>
            <div className="">
              <p>Job Description</p>

              <input
                type="text"
                className="w-full p-2 bg-slate-300 "
                placeholder="Job Title"
              />
            </div>
            <div className="">
              <p>Work Authorization </p>

              <input
                type="text"
                className="w-full p-2 bg-slate-300 "
                placeholder="Job Title"
              />
            </div>
            <div className="">
              <p>Other Work Authorization</p>

              <input
                type="text"
                className="w-full p-2 bg-slate-300 "
                placeholder="Job Title"
              />
            </div>
            <div className="">
              <p>Specializations & Skill </p>

              <input
                type="text"
                className="w-full p-2 bg-slate-300 "
                placeholder="Job Title"
              />
            </div>
            <div className="">
              <p> Job Posting Deadline Select Job Deadline (MM/DD/YYYY). </p>
              <input
                type="date"
                id="birthday"
                className="w-full p-2 bg-slate-300 "
                name="birthday"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
