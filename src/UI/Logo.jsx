const Logo = ({ width, isSticky }) => {
  return (
    <div className={`${isSticky ? "pb-0" : "pb-2 w-36 md:w-auto"}`}>
      <img
        width={isSticky ? 160 : 200}
        src="https://jobsshopper.com/wp-content/uploads/2021/03/jobsshopperss.png"
        alt=""
      />
    </div>
  );
};

export default Logo;
