import React, { useState, useEffect } from "react";
// import { v4 as uuid, v1 } from "uuid"; // 导入UUID库

import { v1 as uuidv1, v3 as uuidv3, v4 as uuidv4, v5 as uuidv5 } from "uuid";

// 生成版本1 UUID
console.log("UUID v1:", uuidv1());

// 生成版本3 UUID
const NAMESPACE_DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
console.log("UUID v3:", uuidv3("example.com", NAMESPACE_DNS));

// 生成版本4 UUID
console.log("UUID v4:", uuidv4());

// 生成版本5 UUID
console.log("UUID v5:", uuidv5("example.com", NAMESPACE_DNS));

// export const getUUID = () => {
//   // 定义字符集，包含小写字母、大写字母和数字
//   let chars = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];

//   const uid = uuid();
//   let longUUID = uid.split("-").join(""); // 生成UUID并去掉连字符
//   let res = ""; // 用于存储最终结果的字符串

//   for (let i = 0; i < 8; i++) {
//     // 循环8次，每次处理4个字符
//     let str = longUUID.substring(i * 4, i * 4 + 4); // 获取UUID的4个字符子串
//     let x = parseInt(str, 16); // 将子串解析为16进制整数
//     res += chars[x % 0x3e]; // 对62取模，找到对应字符并添加到结果中
//   }

//   return res; // 返回生成的短字符串
// };

const App = () => {
  const [str, setStar] = useState("");
  useEffect(() => {
    // console.log("v1: ", v1());
    // setStar(getUUID());
  }, []);
  return <div>uuid: {str}</div>;
};

export default App;
