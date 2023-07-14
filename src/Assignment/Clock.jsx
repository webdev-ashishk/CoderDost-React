import React from "react";
import { useState, useEffect } from "react";
const Clock = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="clock">
      <div className="clock-date">{date.toLocaleTimeString()}</div>
    </div>
  );
};

export default Clock;
