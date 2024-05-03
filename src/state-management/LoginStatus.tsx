import { useContext, useReducer, useState } from "react";
import LoginContext from "./contexts/loginContext";

const LoginStatus = () => {
  // const [user, setUser] = useState('');
  const { user, dispatchUser } = useContext(LoginContext);

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatchUser({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatchUser({ type: "LOGIN", name: "Abhay jii" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
