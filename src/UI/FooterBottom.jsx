import { BiSolidUpArrowSquare } from "react-icons/bi";

const FooterBottom = () => {
  return (
    <div className="flex lg:justify-between justify-center  px-6 md:px-16 bg-[#f5f2f2] text-sm py-4">
      <p className="text-xs md:text-base">
        &#169; 202. Copyrights by Jobs Shopper & 7 Kings Code{" "}
      </p>
      <div className="hidden lg:block ">
        <a href="@">
          <p className="flex    hover:cursor-pointer items-center gap-2">
            Back to Top <BiSolidUpArrowSquare />{" "}
          </p>
        </a>
      </div>
    </div>
  );
};

export default FooterBottom;
