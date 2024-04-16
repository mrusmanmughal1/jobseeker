import CandidateContact from "./CandidateContact";
import Button from "../../Reuseables/Button";
const CandidateDetails = () => {
  return (
    <div>
      <div className="candidate-man relative  ">
        <div className="absolute inset-0 bg-black   opacity-60 "></div>
        <div className="w-11/12 mx-auto ">
          <div className=" relative text-white py-14 md:py-20 flex  md:justify-between  md:items-center flex-col items-start gap-8  md:flex-row  ">
            <div className="  flex-1  ">
              <div className=" py-4 border-b border-white flex flex-col gap-4">
                <p className="text-3xl font-semibold">CANDIDATE</p>
                <p className="text-xl">USMAN</p>
              </div>
              <div className="flex flex-col gap-4 pt-4 text-xl">
                <p> JOB TITLE : Senior Developer</p>
                <p>Established : jul 2021</p>
                <p> Email: Usman@gmail.com</p>
              </div>
            </div>
            <div className=" flex-1  flex justify-end items-center    ">
              <div className=" text-end flex flex-col gap-4 ">
                <p className="text-xl font-semibold hidden md:block">
                  Share This
                </p>
                <div className="flex md:gap-4 gap-2 flex-col md:flex-row ">
                  <Button>DOWNLOAD CV</Button>
                  <Button>View CV</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200  py-8 font-semibold">
        <div className="   w-11/12 mx-auto">Job Types Offered : IT</div>
      </div>
      <div className="w-11/12 mx-auto py-10">
        <div className=" ">
          <div className=" text-4xl font-semibold pb-8">
            About <span className="text-btn-primary">USMAN</span>
          </div>
          <div className="flex  flex-col md:flex-row gap-8">
            <div className="  text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              doloremque animi fugiat ea tempore! Sit doloribus asperiores
              commodi magnam optio autem perspiciatis vero dolores maxime
              explicabo dignissimos facilis, neque fugiat animi corrupti laborum
              consequatur harum similique aspernatur hic? Animi, itaque hic
              expedita in, doloremque magnam maiores rerum ipsum perferendis
              officiis omnis qui molestiae quo! Temporibus, consequatur numquam
              earum ullam, odit doloremque aliquid eaque, hic vel ipsa autem
              reiciendis cupiditate facilis enim. Laborum a cumque, aut
              laudantium sit doloremque quod. Aliquam quaerat magni repellat
              iste aspernatur impedit nemo laboriosam inventore sunt adipisci
              dignissimos non, delectus consequatur ipsa atque quia voluptates
              vero quasi, est quas expedita? Ratione, labore voluptatum. Minus
              dolores et odio, autem delectus vero illum rem natus vel excepturi
              veritatis libero. Quidem, eligendi similique! Doloremque omnis,
              fugiat autem quos exercitationem sapiente totam delectus facere
              consectetur veniam ipsum necessitatibus quia nobis sint fuga,
              nihil alias! Voluptate sapiente maiores ad quaerat incidunt?
              doloremque animi fugiat ea tempore! Sit doloribus asperiores
              commodi magnam optio autem perspiciatis vero dolores maxime
              explicabo dignissimos facilis, neque fugiat animi corrupti laborum
              consequatur harum similique aspernatur hic? Animi, itaque hic
              expedita in, doloremque magnam maiores rerum ipsum perferendis
              officiis omnis qui molestiae quo! Temporibus, consequatur numquam
              earum ullam, odit doloremque aliquid eaque, hic vel ipsa autem
              reiciendis cupiditate facilis enim. Laborum a cumque, aut
              laudantium sit doloremque quod. Aliquam quaerat magni repellat
              iste aspernatur impedit nemo laboriosam inventore sunt adipisci
              dignissimos non, delectus consequatur ipsa atque quia voluptates
              vero quasi, est quas expedita? Ratione, labore voluptatum. Minus
              dolores et odio, autem delectus vero illum rem natus vel excepturi
              veritatis libero. Quidem, eligendi similique! Doloremque omnis,
              fugiat autem quos exercitationem sapiente totam delectus facere
              consectetur veniam ipsum necessitatibus quia nobis sint fuga,
              nihil alias! Voluptate sapiente maiores ad quaerat incidunt?
            </div>
            <CandidateContact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;
