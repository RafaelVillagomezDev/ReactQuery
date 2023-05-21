import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import img from '../public/assets/img/foodie.png'
export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return(
    <div className="login_container" >
      <button onClick={()=>loginWithRedirect()}>Login</button>
      <img className="review__logo" src={img} alt=""/>
    </div>

    

  ) 
};
