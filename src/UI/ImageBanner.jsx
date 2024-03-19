const ImageBanner = ({ url, text }) => {
  return (
    <div className=" h-44 overflow-hidden  relative img-banner flex justify-center items-center bg-cover  ">
      <div className="text-4xl absolute    font-bold text-white">{text}</div>
    </div>
  );
};

export default ImageBanner;
