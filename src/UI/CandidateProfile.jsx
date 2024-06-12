const CandidateProfile = ({ candidateData }) => {
  console.log(candidateData);
  return (
    <div className="shadow-md  bg-white p-6 w-full">
      <div className="border p-8">
        <div className="flex gap-4 items-center">
          <img
            src="https://i.pinimg.com/originals/59/3e/d3/593ed367fdc410a1cfcf8330745a5f59.jpg"
            alt=""
            className="w-24 h-24 object-contain"
          />
          <div className="flex  items-center gap-5">
            <div className="">
              <p className="font-semibold text-2xl">
                {candidateData?.username}
              </p>
              <p>USA</p>
            </div>
            <div className="flex justify-center items-center">
              <p>
                {candidateData.specialization.map((val, i) => (
                  <span key={i}> {val}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
