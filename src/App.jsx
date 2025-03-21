import React, { useState, useEffect } from "react";
import "./App.css";

// Set target date here (YYYY-MM-DDTHH:MM:SS format)
const targetDate = new Date("2025-08-10T00:00:01");

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
    return <h1 className="expired">🎉 Playa Con Dios, Beaches!!! 🎉</h1>;
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

    <div className="links">
      <h2>🔗 Some VB Stuff</h2>
      <ul>
        <li><a href="https://vbweather-mobile.vercel.app/" target="_blank" rel="noopener noreferrer">VB Weather (Virginia Beach's ONLY Multi-Source Forecast System</a></li>
        <li><a href="https://www.google.com/maps/dir/Rochester,+NY/Sandpiper+Beach,+Sandpiper+Rd,+Virginia+Beach,+VA+23456/@39.8045774,-81.8095175,1272596m/data=!3m2!1e3!4b1!4m14!4m13!1m5!1m1!1s0x89d6b3059614b353:0x5a001ffc4125e61e!2m2!1d-77.6088465!2d43.1565779!1m5!1m1!1s0x89bac4954276c753:0x3c31141d5fc27285!2m2!1d-75.9240672!2d36.6930197!3e0?entry=ttu&g_ep=EgoyMDI1MDMxOS4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">From There to Here (Google Maps)</a></li>
      </ul>
    </div>
  </div>
);
};

export default App;
