const Manageprofile = () => {
  return (
    <div className="md:w-3/4">
      <from>
        <div className="flex flex-col gap-6">
          <div className="">
            <label className="font-semibold ">
              Email
              <span className="text-sm px-2 font-normal">Enter your email</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
          </div>
          <div className="flex gap-10">
            <div className="">
              <label className="font-semibold ">
                First Name
                <span className="text-sm px-2 font-normal">
                  Enter your first name
                </span>
              </label>
              <input
                type="text"
                placeholder="Firt Name"
                className="py-3 bg-gray-100 px-2 outline-none w-full"
              />
            </div>
            <div className="">
              <label className="font-semibold ">
                Last
                <span className="text-sm px-2 font-normal">
                  Name Enter your first name
                </span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="py-3 bg-gray-100 px-2 outline-none w-full"
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div className="w-full">
              <label className="font-semibold ">
                Sex
                <span className="text-sm px-2 font-normal">
                  Select your sex.
                </span>
              </label>
              <select className="block w-full border p-3 bg-gray-100">
                <option value="Male">Male</option>
                <option value="fe-Male">Fe-Male</option>
              </select>
            </div>
            <div className="w-full">
              <label className="font-semibold ">
                Birthday
                <span className="text-sm px-2 font-normal">(dd/mm/yyy)</span>
              </label>
              <input
                type="date"
                placeholder="Email"
                className="py-3 bg-gray-100 px-2 outline-none w-full"
              />
            </div>
          </div>
          <div className="">
            <label className="font-semibold ">
              Address 1
              <span className="text-sm px-2 font-normal">
                Enter your Address 1
              </span>
            </label>
            <input
              type="text"
              placeholder="Address"
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
          </div>
          <div className="">
            <label className="font-semibold ">
              Address 2
              <span className="text-sm px-2 font-normal">
                Enter your Address 2
              </span>
            </label>
            <input
              type="text"
              placeholder="Address"
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
          </div>
          <div className="">
            <label className="font-semibold ">
              City
              <span className="text-sm px-2 font-normal">Enter your City </span>
            </label>
            <input
              type="text"
              placeholder="City "
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
          </div>
          <div className="">
            <label className="font-semibold ">
              Country
              <span className="text-sm px-2 font-normal">
                Enter your Country
              </span>
            </label>
            <input
              type="text"
              placeholder="Country"
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
          </div>
          <div className="">
            <label className="font-semibold ">
              Phone
              <span className="text-sm px-2 font-normal">
                Enter your Phone Number
              </span>
            </label>
            <input
              type="text"
              placeholder="Phone"
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
          </div>
          <div className="">
            <label className="font-semibold ">
              Website
              <span className="text-sm px-2 font-normal">
                Enter your Website
              </span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
          </div>
          <div className="">
            <label className="font-semibold ">
              About
              <span className="text-sm px-2 font-normal">
                Enter your Description
              </span>
            </label>
            <textarea
              rows="4"
              cols="50"
              type="text"
              placeholder="Email"
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
          </div>
          <div className="">
            <label className="font-semibold ">Cover Letter</label>
            <input
              type="text"
              placeholder="Cover Letter"
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
          </div>
          <div className="">
            <label className="font-semibold ">
              Jobs Interests
              <span className="text-sm px-2 font-normal">
                Select your interests
              </span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
          </div>
          <div className="">
            <label className="font-semibold ">
              Minimum Salary
              <span className="text-sm px-2 font-normal">
                Set minimum salary ($)
              </span>
            </label>
            <input
              type="text"
              placeholder="Salary"
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
          </div>
          <div className="">
            <label className="font-semibold ">
              Avatar Image
              <span className="text-sm px-2 font-normal">
                Upload Your Avatar Image
              </span>
            </label>
            <input
              type="file"
              placeholder="Email"
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
          </div>
          <div className="">
            <label className="font-semibold ">
              Cv File
              <span className="text-sm px-2 font-normal">
                Upload Your cv File{" "}
              </span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
          </div>
          <div className="">
            <label className="font-semibold ">New password</label>
            <input
              type="text"
              placeholder="New Password"
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
          </div>
          <div className="">
            <label className="font-semibold ">Confirm Password</label>
            <input
              type="text"
              placeholder="Confirm Password"
              className="py-3 bg-gray-100 px-2 outline-none w-full"
            />
          </div>
        </div>
        <div className=" text-center py-6">
          <button className="bg-btn-primary px-8 py-4 rounded-md text-white font-semibold">
            SAVE CHANGES
          </button>
        </div>
      </from>
    </div>
  );
};

export default Manageprofile;
