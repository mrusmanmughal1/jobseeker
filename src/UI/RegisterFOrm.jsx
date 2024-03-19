const RegisterFOrm = () => {
  return (
    <div className="flex flex-col gap-4 w-full md:w-1/2 mx-auto">
      <div className=" flex items-center gap-2 py-2">
        <p>Accoun Type</p>
        <p className="text-xs">Choose accout type</p>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-3">
          <input type="checkbox" name="" id="candidate" />

          <label htmlFor="candidate"> Candidate</label>
        </div>
        <div className=" flex items-center gap-3">
          <input type="checkbox" name="" id="Employer" />

          <label htmlFor="Employer"> Employer</label>
        </div>
      </div>
      <div className="">
        <div className="flex gap-2 items-center">
          <p>User name </p>
          <p className="text-xs">Enter Your username </p>
        </div>
        <input
          type="text"
          className="py-4 px-2 rounded-sm border w-full text-black font-semibold bg-gray-200 outline-none"
          placeholder="USER NAME"
        />
      </div>
      <div className="">
        <div className="flex md:flex-row flex-col gap-2 md:items-center">
          <p>Email Address </p>
          <p className="text-xs">
            (In Case of Employer, User must have Company Email Address){" "}
          </p>
        </div>
        <input
          type="text"
          className="py-4 px-2 rounded-sm border w-full text-black font-semibold bg-gray-200 outline-none"
          placeholder="Email Address"
        />
      </div>
      <div className="">
        <div className="flex gap-2 items-center">
          <p>Password </p>
          <p className="text-xs">Enter Your Password </p>
        </div>
        <input
          type="text"
          className="py-4 px-2 rounded-sm border  w-full text-black font-semibold bg-gray-200 outline-none"
          placeholder="Password "
        />
      </div>
      <div className="">
        <div className="flex gap-2 items-center">
          <p>Confirm Password </p>
          <p className="text-xs">Enter Confirm Password </p>
        </div>
        <input
          type="text"
          className="py-4 px-2 rounded-sm border w-full text-black font-semibold bg-gray-200 outline-none"
          placeholder="Confirm Password "
        />
      </div>
      <div className="flex md:flex-row flex-col md:gap-8 gap-4">
        <div className="w-full">
          <div className="">
            <div className="flex gap-2 items-center">
              <p> First Name </p>
              <p className="text-xs">Enter First Name </p>
            </div>
            <input
              type="text"
              className="py-4 px-2 rounded-sm border w-full text-black font-semibold bg-gray-200 outline-none"
              placeholder="First Name "
            />
          </div>
        </div>
        <div className="w-full">
          <div className="">
            <div className="flex gap-2 items-center">
              <p>Last Name </p>
              <p className="text-xs">Enter Last Name </p>
            </div>
            <input
              type="text"
              className="py-4 px-2 w-full rounded-sm border text-black font-semibold bg-gray-200 outline-none"
              placeholder="Last Name "
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="">
          <div className="flex gap-2 items-center">
            <p>Specializations </p>
            <p className="text-xs">Enter Last Name </p>
          </div>
          <input
            type="text"
            className="py-4 px-2 rounded-sm border w-full text-black font-semibold bg-gray-200 outline-none"
            placeholder="Specializations "
          />
        </div>
      </div>
      <div className=" text-center">
        <button className="font-semibold px-8 py-4 rounded-md bg-purple-900 text-white">
          REGISTER NOW
        </button>
      </div>
    </div>
  );
};

export default RegisterFOrm;
