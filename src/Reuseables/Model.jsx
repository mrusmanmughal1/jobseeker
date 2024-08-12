const Model = ({ children, model, index }) => {
  return (
    <div
      className={`fixed ${index}     relative top-0 w-full left-0 ${
        model ? "block" : "hidden"
      }`}
      id="modal"
    >
      <div className="flex items-center justify-center      pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-950 opacity-80" />
          <div
            className="inline-block   mt-20 bg-white rounded-lg text-left overflow-y-auto shadow-xl transform transition-all     md:w-1/2  sm:w-full max-h-screen"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            {children}
          </div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
      </div>
    </div>
  );
};

export default Model;
