const MyAccount = () => {
  return (
    <div className="   w-full    ">
      <div className="  flex justify-between   ">
        <p className="text-3xl font-semibold  tracking-wider">
          ACCOUNT INFORMATION
        </p>
        <a href=""> Edit</a>
      </div>
      <div className="flex gap-10 sm:gap-24 py-8">
        <div className="w-full">
          <ul className="flex  font-semibold flex-col gap-8">
            <li>Email</li>
            <li>First Name</li>
            <li>Last name</li>
            <li>Birthday</li>
            <li>Address 1</li>
            <li>City</li>
            <li>Country</li>
            <li>Phone</li>
            <li>Cover Letter</li>
            <li>Minimum Salary</li>
          </ul>
        </div>
        <div className="w-full">
          <ul className="flex flex-col gap-8">
            <li>misterusman3@gmail.com</li>
            <li>muhammad</li>
            <li>Usman</li>
            <li>1996-02-02</li>
            <li>Lahore</li>
            <li>Lahore</li>
            <li>Pakistan</li>
            <li>923049513443</li>
            <li>sadasdas</li>
            <li>50000</li>
          </ul>
        </div>
      </div>
      <div className=" border-t  pt-5 flex flex-col gap-4">
        <p className="tracking-wider text-3xl font-semibold">
          APPLICATION HISTORY
        </p>
        <p className="text-sm">
          You have applied for 3 jobs in the past 30 days.
          <a href="" className="text-btn-primary">
            View application
          </a>
        </p>
      </div>
    </div>
  );
};

export default MyAccount;
