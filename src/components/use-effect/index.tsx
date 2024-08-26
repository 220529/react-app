import React, { useEffect, useState } from "react";
import style from "./style.module.less";

export default React.memo(() => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1);
    setCount(count + 1);
    console.log("——————————2", count);
    setCount(count + 1);
    setCount(count + 1);
    console.log("——————————4", count);
  }, []);
  const add = () => {
    setTimeout(() => {
      setCount(count + 1);
      setCount(count + 1);
      console.log("——————————2", count);
      setCount(count + 1);
      setCount(count + 1);
      console.log("——————————4", count);
    });
    // console.log("——————————start");
    // Promise.resolve(1).then(e => {
    //   console.log("---------Promise");
    // });
    // setCount(e => {
    //   console.log("--------setCount");
    //   return e + 1;
    // });
    // console.log("——————————end");
  };
  // const add = () => {
  //   console.log("——————————start");
  //   Promise.resolve(1).then(e => {
  //     console.log("---------Promise");
  //   });
  //   setCount(e => {
  //     console.log("--------setCount");
  //     return e + 1;
  //   });
  //   console.log("——————————end");
  // };
  return (
    <div className={style.container}>
      <span className={style.title} onClick={add}>
        {count}
      </span>
    </div>
  );
});
