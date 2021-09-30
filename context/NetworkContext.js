import { createContext, useContext, Context } from "react";

const NetworkContext = createContext({
  status: "connected",
  updateStatus: (val) => {},
});

export function NetworkProvider({ children }) {
  return (
    <NetworkContext.Provider value={{ status: "status" }}>
      {children}
    </NetworkContext.Provider>
  );
}
