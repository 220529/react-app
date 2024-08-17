import React, { useEffect } from "react";

export default React.memo(() => {
  const init = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/cats", true);
    console.log("======>>>>>>>>>start");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("xhr", JSON.parse(xhr.response));
      }
    };
    xhr.send();
    console.log("======>>>>>>>>>end");
  };
  useEffect(() => {
    init();
  }, []);
  return <span>xhr</span>;
});
