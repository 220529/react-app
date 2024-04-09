import React, { useState, useEffect, useCallback } from "react";

const useCountdown = (initialCountdown) => {
  const [countdown, setCountdown] = useState(initialCountdown);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCountdown((prevCountdown) =>
          prevCountdown > 0 ? prevCountdown - 1 : 0
        );
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startCountdown = useCallback(() => {
    setIsRunning(true);
  }, []);

  const resetCountdown = useCallback(() => {
    setIsRunning(false);
    setCountdown(initialCountdown);
  }, [initialCountdown]);

  useEffect(() => {
    if (countdown === 0) {
      resetCountdown();
    }
  }, [countdown, resetCountdown]);

  return { countdown, isRunning, startCountdown, resetCountdown };
};

export { useCountdown };
