import { useState, useEffect, useRef } from "react";

export const StopWatch = () => {
  const [msec, setMsec] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [pause, setPause] = useState(true);
  const counterRef = useRef(null);

  const setintervalfun = () => {
    counterRef.current = setInterval(() => {
      setMsec((prev) => {
        if (prev == 99) {
          setSec((sprev) => {
            if (sprev > 59) {
              setMin((mprev) => mprev + 1);
              setSec(0);
              setMsec(0);
            }
            return sprev + 0.5;
          });
          setMsec(0);
        }

        return prev + 1;
      });
    }, 10);
  };

  const handlePause = () => {
    setPause(!pause);
  };
  return (
    <div>
      <p style={{ fontSize: "25px" }}>
        {min !== null && min > 0 ? min + "m " : null}
        {min > 0 && sec <= 9 ? "0" + sec + "s " : sec + "s "}
        {msec <= 9 ? "0" + msec : msec}
      </p>
      <button
        onClick={() => {
          handlePause(
            pause ? setintervalfun() : clearInterval(counterRef.current)
          );
        }}
      >
        {pause ? "Start" : "Stop"}
      </button>
      <button
        onClick={() => {
          clearInterval(counterRef.current);
          setMsec(0);
          setSec(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};
