import ImageBanner from "../UI/ImageBanner";
import RegisterFOrm from "../UI/RegisterFOrm";

const Register = () => {
  const url =
    "http://demo.cmssuperheroes.com/themeforest/wp-recruitment/wp-content/themes/wp-recruitment/assets/images/bg-page-title.jpg";
  return (
    <div>
      <ImageBanner url={url} text={"Register"} />
      <div className="py-10 w-11/12 mx-auto">
        <RegisterFOrm />
      </div>
    </div>
  );
};

export default Register;
