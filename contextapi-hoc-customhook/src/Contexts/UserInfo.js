import { createContext } from "react";

export const UserInfoContext = createContext({
  email: "jan@kowalski.pl",
  isAdmin: false
});
