import { useNavigate } from "react-router-dom";
import ImageBanner from "../UI/ImageBanner";
import LoginForm from "../UI/LoginForm";
import { useUserinfo } from "../Context/Userinfo";
import { useEffect } from "react";

const LoginPage = () => {
  const { auth } = useUserinfo();
  const navigate = useNavigate();
  useEffect(() => {});

  if (auth) {
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
