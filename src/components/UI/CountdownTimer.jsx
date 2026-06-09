import React, { useEffect, useState, useCallback } from "react";

const CountdownTimer = ({ expiryDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(expiryDate) - new Date();

    if (difference <= 0) {
      return "";
    }

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${hours}h ${minutes}m ${seconds}s`;
  }, [expiryDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  if (!timeLeft) {
    return null;
  }

  return <div className="de_countdown">{timeLeft}</div>;
};

export default CountdownTimer;
