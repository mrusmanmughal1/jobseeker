const Loader = () => {
  return (
    <div className="w-full flex h-screen   items-center flex-col gap-5  pt-40">
      <div
        className="w-20 h-20 rounded-full animate-spin
        border-8 border-solid border-purple-500 border-t-transparent"
      ></div>
      <p className="text-2xl font-bold uppercase text-purple-900">
        Loading ....
      </p>
    </div>
  );
};

export default Loader;
