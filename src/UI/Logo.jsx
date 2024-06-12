import logo from "../assets/logo.webp";
const Logo = ({ width, isSticky }) => {
  return (
    <div className={`${isSticky ? "pb-0" : "pb-2 w-36  xl:w-auto "}`}>
      <img width={isSticky ? 160 : 200} src={logo} alt="" />
    </div>
  );
};

export default Logo;
