import React, { useEffect, useState } from "react";

const RandomTextComponent = () => {
  const [randomText, setRandomText] = useState(generateRandomText());

  // 生成10个随机字母的函数
  function generateRandomText() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    return Array.from(
      { length: 10 },
      () => letters[Math.floor(Math.random() * letters.length)]
    ).join("");
  }

  useEffect(() => {
    let intervalId;

    // 使用 setTimeout 来控制更新速度
    const updateText = () => {
      setRandomText(generateRandomText());
      intervalId = setTimeout(updateText, 500); // 每500ms更新一次
    };

    updateText(); // 初次调用更新函数

    // 清理函数，取消定时器
    return () => clearTimeout(intervalId);
  }, []);

  return <div>{randomText}</div>;
};

export default RandomTextComponent;
