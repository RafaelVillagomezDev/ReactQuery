import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import img from "../public/assets/img/login.jpg";
export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login_container">
      <div className="login_container-login">
        <div className="login_text-title  login_title-init">
          <h1 id="login_title-main">
            Foodie<span>Places</span>
          </h1>
        </div>
        <div className="login_text-title login_text-sub">
          <h2>
            {" "}
            <span>Unete</span> y <span>disfruta</span> de todas nuestras{" "}
            <span>ventajas</span>{" "}
          </h2>
        </div>
        <div className=" login_text-title login_text-btn">
          <button id="login_button-btn" onClick={() => loginWithRedirect()}>
            Login
          </button>
        </div>
      </div>
      <div id="login_box-one" className="login_container-login">
        <div className="login_title-initmobile">
          <h1 id="login_title-mainmobile">
            Foodie<span>Places</span>
          </h1>
        </div>
        <img id="login_img" className="" src={img} />
      </div>
    </div>
  );
};
