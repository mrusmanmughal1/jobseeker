import { useEffect, useRef } from "react";

const Minicart = ({ children, style, data, set }) => {
  const top = data ? "top-20" : "top-32";
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        set(false);
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
      className={`${style}  bg-white absolute z-50 shadow-md rounded-sm  transition ease-linear duration-300 ${top}`}
    >
      {children}
    </div>
  );
};

export default Minicart;
