import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

export function Signin() {
  const [{ user }] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div onClick={handleAuthentication} >
      <Link to={!user && "/login"}>
        <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
      </Link>
    </div>
  );
}
//  {/* </Link>  */}
// {/* <Link to={!user && "/login"}
// onClick={handleAuthenti{/* className="header__optionLineTwo" */}

export function UserName() {
  const [{ user }] = useStateValue();
  return (
    <span className="header__optionLineOne">
      {user ? `${user.email}` : "Hello Guest"}
    </span>
  );
}
