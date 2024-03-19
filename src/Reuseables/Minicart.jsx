const Minicart = ({ children, width }) => {
  return (
    <div
      className={`${width} " bg-white absolute  z-50 shadow-md rounded-sm top-24    "`}
    >
      {children}
    </div>
  );
};

export default Minicart;
