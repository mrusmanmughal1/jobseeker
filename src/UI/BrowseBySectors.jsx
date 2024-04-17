const BrowseBySectors = () => {
  const arr = [
    "facebook",
    " instagram ",
    "youtubdsae",
    "yahooo",
    "facebook",
    " instdasdagram ",
    "youtube",
    "yahooo",
    "facedasdbook",
    " instagram ",
    "youtube",
    "ssdasd",
    "facebook",
    " instagram ",
    "youtube",
    "yahooo",
  ];
  return (
    <div className="bg-white p-8 mx-0   shadow-md flex flex-col gap-4">
      <p className="text-2xl font-semibold mb-2">Browse More Jobs by Sector</p>
      <div className=" flex gap-4 flex-wrap  ">
        {arr.map((val, i) => (
          <div key={i} className="bg-slate-200 py-2 px-3 rounded-full ">
            {val}
          </div>
        ))}
      </div>
      <div className="text-end">
        <button className="bg-btn-primary text-white py-2  px-4 rounded-md">
          VIEW ALL SECTORS
        </button>
      </div>
    </div>
  );
};

export default BrowseBySectors;
