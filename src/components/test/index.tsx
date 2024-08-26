import React, { useEffect } from "react";
import style from "./style.module.less";

function Log(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyName} with arguments: ${JSON.stringify(args)}`);
    return method.apply(this, args);
  };
}

class Calculator {
  @Log
  add(a: number, b: number) {
    return a + b;
  }

  @Log
  subtract(a: number, b: number) {
    return a - b;
  }
}

export default React.memo(() => {
  useEffect(() => {
    const a = 1;
    const calc = new Calculator();
    console.log(calc.add(10, 5)); // Logs: Calling add with arguments: [10,5] and result 15
    console.log(calc.subtract(10, 5));
  }, []);
  return (
    <div className={style.container}>
      <span className={style.title}>title</span>
    </div>
  );
});
