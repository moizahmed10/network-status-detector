import "../styles/globals.css";
import { createContext, useContext, Context, useState } from "react";

export const NetworkContext = createContext({
  status: "disconnected",
  updateStatus: (val) => {},
});
function MyApp({ Component, pageProps }) {
  const [status, updateStatus] = useState("disconnected");
  return (
    <NetworkContext.Provider value={{ status, updateStatus }}>
      <Component {...pageProps} />
    </NetworkContext.Provider>
  );
}

export default MyApp;
