import { ReactNode, useReducer } from "react";
import LoginContext from "./loginContext";

interface Login {
  type: "LOGIN";
  name: string;
}

interface Logout {
  type: "LOGOUT";
}

export type Action = Login | Logout;

const loginReducer = (state: string, action: Action): string => {
  switch (action.type) {
    case "LOGIN":
      return action.name;

    case "LOGOUT":
      return "";
  }
};

interface Props {
  children: ReactNode;
}
const LoginProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(loginReducer, "");
  return (
    <LoginContext.Provider value={{ user, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
