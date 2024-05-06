import react, { Dispatch } from "react";
import { Action } from "../reducers/loginReducer";

interface LoginContextType {
  user: string;
  dispatch: Dispatch<Action>;
}

const LoginContext = react.createContext<LoginContextType>(
  {} as LoginContextType
);

export default LoginContext;
