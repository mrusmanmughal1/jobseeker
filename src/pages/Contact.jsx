import { useFormik } from "formik";
import contact from "../assets/contact-us.png";
import { ContatUs } from "../helpers/Schema/FormValidation";
import { useLeaveMessage } from "../Services/General/useLeaveMessage";
import MiniLoader from "../UI/MiniLoader";

const Contact = () => {
  const { mutate: sendMessage, isPending, isLoading } = useLeaveMessage();
  const initialValues = {
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  };
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues,
      onSubmit: async (values, action) => {
        console.log(errors);

        await sendMessage(values);
        // Reset the form after successful job posting
      },
      validationSchema: ContatUs,
    });
  return (
    <div className="px-4 md:px-8  ">
      <div className="mt-8 lg:mt-10">
        <h1 className="text-4xl font-semibold text-center lg:text-center">
          Contact <span className="text-[#4E007A]">Us</span>
        </h1>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between mt-8 md:mt-12 lg:mt-16">
          <div className="w-full lg:w-auto lg:max-w-md mx-auto lg:mx-0 lg:ml-[7rem] text-center">
            <h2 className="text-lg text-[#4E007A] font-semibold py-2">
              Address
            </h2>
            <h3 className="text-base font-semibold">Head Office:</h3>
            <p className="text-base py-1">140 N University Dr Coral Springs,</p>
            <p className="text-base py-1">FL 33071</p>
          </div>
          <div className="w-full lg:w-auto lg:max-w-md mx-auto text-center lg:mx-0 mr-4 lg:mr-[12rem]">
            <h2 className="text-lg text-[#4E007A] font-semibold py-2">Email</h2>
            <p className="text-base">info@jobsshopper.com</p>
          </div>
        </div>
        <div className="mt-8 md:mt-12 lg:mt-16 flex flex-col lg:flex-row items-start">
          <div className="lg:w-1/2 mx-auto  ">
            <h1 className="text-black text-5xl font-semibold">
              Leave a <span className="text-[#4E007A]">Message</span>
            </h1>
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-lg p-8 bg-white mt-8 md:mt-0 md:ml-4 lg:mt-0 lg:ml-0 lg:mr-[12rem]"
            >
              <div className="mb-4">
                <label
                  htmlFor="your-name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Your Name (required)
                </label>
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Name}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
                {errors.Name && touched.Name && (
                  <p className="text-start px-1 text-sm font-semibold text-red-600">
                    {errors.Name}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="your-email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Your Email (required)
                </label>
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Email}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
                {errors.Email && touched.Email && (
                  <p className="text-start px-1 text-sm font-semibold text-red-600">
                    {errors.Email}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="your-subject"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="Subject"
                  id="Subject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Subject}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
                {errors.Subject && touched.Subject && (
                  <p className="text-start px-1 text-sm font-semibold text-red-600">
                    {errors.Subject}
                  </p>
                )}
              </div>

              <div className="mb-">
                <label
                  htmlFor="your-message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  name="Message"
                  id="Message"
                  rows="5"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Message}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>
              {errors.Message && touched.Message && (
                <p className="text-start px-1 text-sm font-semibold text-red-600">
                  {errors.Message}
                </p>
              )}
              <div className="mb-4 text-center">
                <button className="w-full py-3  mt-4 bg-[#4E007A] text-white rounded-md cursor-pointer transition duration-300">
                  {isPending ? <MiniLoader /> : "Submit"}
                </button>
              </div>
            </form>
          </div>
          <img
            src={contact}
            alt="Contact Us"
            className="lg:w-1/3 mt-8 lg:mt-0 mb-4 md:mb-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
