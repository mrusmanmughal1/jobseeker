import { useEffect, useRef } from "react";

const Minicart = ({ children, style, data, set }) => {
  console.log(data);
  const top = data ? "top-20" : "top-28";
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        set(false);
        console.log("first");
      }
    }
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);
  return (
    <div
      ref={ref}
      className={`${style} " bg-white absolute  z-50 shadow-md rounded-sm   ${top}     "`}
    >
      {children}
    </div>
  );
};

export default Minicart;
