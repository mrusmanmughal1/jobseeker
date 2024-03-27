import { useNavigate } from "react-router-dom";
import ImageBanner from "../UI/ImageBanner";
import LoginForm from "../UI/LoginForm";
import { useUserinfo } from "../Context/Userinfo";

const LoginPage = () => {
  const { user } = useUserinfo();
  const navigate = useNavigate();

  if (user) {
    navigate("/dashboard");
  } else {
    const url =
      "http://demo.cmssuperheroes.com/themeforest/wp-recruitment/wp-content/themes/wp-recruitment/assets/images/bg-page-title.jpg";
    return (
      <div className=" ">
        <ImageBanner url={url} text={"LOGIN"} />
        <LoginForm />
      </div>
    );
  }
};

export default LoginPage;
