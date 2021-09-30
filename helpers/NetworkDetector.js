import React, {
  useState,
  useEffect,
  Component,
  Children,
  useContext,
} from "react";
import { NetworkContext } from "../pages/_app";

export default function (ComposedComponent) {
  const NetworkDetector = () => {
    const [isDisconnected, setIsDisconnected] = useState(false);
    const { status, updateStatus } = useContext(NetworkContext);
    useEffect(() => {
      window.addEventListener("online", handleNetworkChange);
      window.addEventListener("offline", handleNetworkChange);
      return () => {
        window.removeEventListener("online", handleNetworkChange);
        window.removeEventListener("offline", handleNetworkChange);
      };
    }, []);
    const handleNetworkChange = () => {
      const condition = navigator.onLine ? "online" : "offline";
      if (condition === "online") {
        const webPing = setInterval(() => {
          fetch("//google.com", { mode: "no-cors" })
            .then(() => {
              updateStatus("connected");
              setIsDisconnected(false),
                () => {
                  return clearInterval(webPing);
                };
            })
            .catch(() => {
              setIsDisconnected(true);
              updateStatus("disconnected");
            });
        }, 2000);
        return;
      } else {
        setIsDisconnected(true);
        updateStatus("disconnected");
        return isDisconnected;
      }
    };
    return (
      <div>
        {isDisconnected && (
          <div className="internet-error">
            <p>Internet connection lost</p>
          </div>
        )}
        <ComposedComponent {...Children} />
      </div>
    );
  };
  return NetworkDetector;
}
