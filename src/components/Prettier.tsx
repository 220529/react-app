import React from "react";

// 1. 代码缩进
const MyComponent: React.FC = () => {
  // 2. 行尾分号
  const handleClick = (): void => {
    console.log("Button clicked."); // 行尾分号
  };

  // 3. 单引号 vs 双引号
  const greeting: string = "Hello, world";

  // 4. 箭头函数括号
  const add = (a: number, b: number): number => a + b;

  // 5. 对象属性的引号
  const person: { name: string; age: number } = {
    name: "John",
    age: 30,
  };

  // 6. 函数参数的空格
  const multiply = (a: number, b: number): number => a * b;

  return (
    <div>
      <p>{greeting}</p>
      <button onClick={handleClick}>Click Me</button>
      <p>Sum: {add(5, 3)}</p>
      <p>Product: {multiply(4, 6)}</p>
      <p>
        Person: {person.name}, Age: {person.age}
      </p>
    </div>
  );
};

export default MyComponent;
