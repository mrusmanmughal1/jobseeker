const NewPost = () => {
  return (
    <div>
      <form action="">
        <div className="">
          <p className="mb-4">Contact Type</p>
          <div className="flex gap-4">
            <div className="div flex items-center gap-2">
              <input type="checkbox" name="" id="Contract" />
              <label htmlFor="Contract">Contract</label>
            </div>
            <div className="div flex items-center gap-2">
              <input type="checkbox" name="" id="ft" />
              <label htmlFor="ft">Full Time</label>
            </div>

            <div className="div flex items-center gap-2">
              <input type="checkbox" name="" id="int" />
              <label htmlFor="int">Internshop </label>
            </div>

            <div className="div flex items-center gap-2">
              <input type="checkbox" name="" id="pt" />
              <label htmlFor="pt">Part Time</label>
            </div>
          </div>
          <div className="">
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
          <div className="flex gap-20">
            <div className="w-full">
              <div className="flex   flex-col gap-3">
                <label htmlFor="">Job Address</label>
                <select name="" id="">
                  <option value="">State</option>
                </select>
              </div>
            </div>
            <div className="w-full">
              <div className="flex   flex-col gap-3">
                <label htmlFor="">City</label>
                <input type="text" placeholder="CIty" />
              </div>
            </div>
            <div className="w-full">
              <div className="flex  flex-col gap-3">
                <label htmlFor="">City</label>
                <input type="text" placeholder="CIty" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
