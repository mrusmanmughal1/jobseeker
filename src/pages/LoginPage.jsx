import ImageBanner from "../UI/ImageBanner";
import LoginForm from "../UI/LoginForm";

const LoginPage = () => {
  const url =
    "http://demo.cmssuperheroes.com/themeforest/wp-recruitment/wp-content/themes/wp-recruitment/assets/images/bg-page-title.jpg";
  return (
    <div className=" ">
      <ImageBanner url={url} text={"LOGIN"} />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
