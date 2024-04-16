import Button from "../../Reuseables/Button";

const CandidateContact = () => {
  return (
    <div className="md:w-1/4">
      <div className="bg-slate-100">
        <div className="p-4 font-semibold text-white bg-btn-primary">
          CONTACT USMAN
        </div>
        <div className="p-4 bg-slate-100">
          <form className="flex flex-col gap-4">
            <input type="text" className="py-2" />
            <input type="text" className="py-2" />
            <textarea rows="4" cols="50" />
            <button className="bg-btn-primary text-white p-4 rounded-md font-semibold">
              SEND MESSAGE
            </button>
          </form>
        </div>
        <div className="flex p-4 flex-col gap-4 py-4">
          <div className="">
            <p className="text-btn-primary font-semibold ">Address</p>
            <p>USA</p>
          </div>
          <div className="">
            <p className="text-btn-primary font-semibold "> Email</p>
            <p>Pakistan@gmail.com</p>
          </div>
          <div className="">
            <p className="text-btn-primary font-semibold "> Call</p>
            <p>+92 8363 3278383 8373 </p>
          </div>
        </div>
      </div>
      <div className="  flex   flex-col  gap-2 py-2 ">
        <Button>DOWNLOAD CV</Button>

        <Button>VIEW CV</Button>
      </div>
    </div>
  );
};

export default CandidateContact;
