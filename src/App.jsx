import { useState } from "react";
import "./App.css";
import { StopWatch } from "./components/StopWatch";
import { Timer } from "./components/Timer";
import { MdTimer } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";

function App() {
  const [show, setShow] = useState("stopwatch");
  const handleChange = () => {
    setShow("timer");
  };
  return (
    <div className="App" style={show === "timer" ? { width: "500px" } : null}>
      <div className="btn">
        <button
          style={
            show === "timer"
              ? { borderBottom: "2px solid #2490ff", color: "#2490ff" }
              : null
          }
          onClick={() => setShow("timer")}
        >
          <GiSandsOfTime />
          TIMER
        </button>
        <button
          style={
            show === "stopwatch"
              ? { borderBottom: "2px solid #2490ff", color: "#2490ff" }
              : null
          }
          onClick={() => setShow("stopwatch")}
        >
          <MdTimer />
          STOPWATCH
        </button>
      </div>
      <div className="div">
        {show === "stopwatch" ? <StopWatch /> : <Timer />}
      </div>
    </div>
  );
}

export default App;
