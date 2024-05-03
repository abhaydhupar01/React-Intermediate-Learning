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

export default loginReducer;
