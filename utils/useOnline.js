import { useState, useEffect } from "react";
const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      handleOnline = () => setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      handleOffline = () => setIsOnline(false);
    });
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
};

export default useOnline;
