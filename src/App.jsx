import React from "react";
import Countdown from "./components/Countdown";

function App() {
  return (
    <div>
      {/* Change this to your desired target date */}
      <Countdown targetDate="2025-08-10T00:00:01" />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <a href="https://vbweather-mobile.vercel.app/" target="_blank" rel="noopener noreferrer">
          VB Weather - Virginia Beach's ONLY Multi-Source Weather Forecast System
        </a>
        <br />
        <a href="https://www.google.com/maps/dir/Rochester,+NY/Sandpiper+Beach,+Sandpiper+Rd,+Virginia+Beach,+VA+23456/@39.8045774,-81.8095175,1272596m/data=!3m2!1e3!4b1!4m14!4m13!1m5!1m1!1s0x89d6b3059614b353:0x5a001ffc4125e61e!2m2!1d-77.6088465!2d43.1565779!1m5!1m1!1s0x89bac4954276c753:0x3c31141d5fc27285!2m2!1d-75.9240672!2d36.6930197!3e0?entry=ttu&g_ep=EgoyMDI1MDMxOS4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer">
          From There to Here (Google Maps)
        </a>
      </div>
    </div>
  );
}

export default App;

