import React, { useState, useEffect } from "react";
import "./App.css";

// Set target date here (YYYY-MM-DDTHH:MM:SS format)
const targetDate = new Date("2025-12-31T23:59:59");

const calculateTimeLeft = () => {
  const now = new Date();
  const difference = targetDate - now;

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    return null; // Countdown is over
  }
};

const App = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <h1 className="expired">🎉 Time's up! 🎉</h1>;
  }

  return (
    <div className="container">
      <h1>⏳ Countdown Timer</h1>
      <div className="countdown">
        <div className="time-box">
          <span>{timeLeft.days}</span>
          <span>Days</span>
        </div>
        <div className="time-box">
          <span>{timeLeft.hours}</span>
          <span>Hours</span>
        </div>
        <div className="time-box">
          <span>{timeLeft.minutes}</span>
          <span>Minutes</span>
        </div>
        <div className="time-box">
          <span>{timeLeft.seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default App;
