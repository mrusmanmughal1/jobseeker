import Button from "../../Reuseables/Button";

const CandidateContact = ({ email, phone, city, country, download }) => {
  return (
    <div className="md:w-1/4">
      <div className="bg-slate-100">
        <div className="p-4 font-semibold text-white bg-btn-primary">
          CONTACT USMAN
        </div>
        <div className="p-4 bg-slate-100">
          <form className="flex flex-col gap-4">
            <input type="text" className="p-2" placeholder="Name" />
            <input type="text" className="p-2" placeholder="Subject" />
            <textarea
              rows="4"
              cols="50"
              className="p-2"
              placeholder="Message"
            />
            <button className="bg-btn-primary text-white p-4 rounded-md font-semibold">
              SEND MESSAGE
            </button>
          </form>
        </div>
        <div className="flex p-4 flex-col gap-4 py-4">
          <div className="">
            <p className="text-btn-primary font-semibold ">Address</p>
            <p>
              {city} , {country}
            </p>
          </div>
          <div className="">
            <p className="text-btn-primary font-semibold "> Email</p>
            <p>{email}</p>
          </div>
          <div className="">
            <p className="text-btn-primary font-semibold "> Call</p>
            <p>{phone} </p>
          </div>
        </div>
      </div>
      <div className="  flex   flex-col  gap-2 py-2 ">
        <Button>
          <a href={download} download>
            DOWNLOAD CV{" "}
          </a>
        </Button>

        <Button>VIEW CV</Button>
      </div>
    </div>
  );
};

export default CandidateContact;
