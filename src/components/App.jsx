import React, { useState } from "react";

let now = new Date().toLocaleTimeString();
function App() {
  setInterval(gettime, 1000);
  const [time, set_time] = useState(now);
  function gettime() {
    const newtime = new Date().toLocaleTimeString();
    set_time(newtime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={gettime}>Get Time</button>
    </div>
  );
}

export default App;
