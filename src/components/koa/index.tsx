import React, { useEffect, useState } from "react";
import * as api from "@/api";

export default React.memo(() => {
  const [message, setMessage] = useState("");
  const fetchData = async () => {
    try {
      const res = await api.get({ url: "/api/test" });
      console.log("res", res);
      if (res?.status === 200) {
        setMessage(res?.data.message);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <span>message: {message}</span>;
});
