import { useState, useEffect, useRef } from "react";

export const Timer = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(5);
  const [hrs, setHrs] = useState(null);
  const [pause, setPause] = useState(true);
  const counterRef = useRef(null);
  const [timesec, setTimesec] = useState(null);
  const [timemin, setTimemin] = useState(null);
  const [timehrs, setTimehrs] = useState(null);

  const handleTimerUpdatehrs = (value) => {
    if (Number.isNaN(value)) {
      alert("please input Number");
      return;
    }
    setTimehrs(Number(value));
  };
  const handleTimerUpdatemin = (value) => {
    if (Number.isNaN(value)) {
      alert("please input Number");
      return;
    }
    setTimemin(Number(value));
  };
  const handleTimerUpdatesec = (value) => {
    if (Number.isNaN(value)) {
      alert("please input Number");
      return;
    }
    setTimesec(Number(value));
  };

  const handleUpdate = () => {
    setHrs(timehrs);
    setMin(timemin);
    setSec(timesec);
    setintervalfun();
    setPause(false);
  };

  const setintervalfun = () => {
    counterRef.current = setInterval(() => {
      setSec((prev) => {
        if (prev === 0) {
          setMin((mprev) => {
            if (mprev === 0) {
              if (hrs !== null) {
                setHrs((hprev) => {
                  if (hprev === 0 && mprev === 0 && prev === 0) {
                    clearInterval(counterRef.current);
                    setHrs(0);
                    setMin(0);
                    setSec(0);
                  }
                  if (hprev > 0) {
                    setMin(59);
                    setSec(59);
                    hprev - 0.5;
                  }
                  return hprev - 0.5;
                });
              } else if (hrs === null) {
                clearInterval(counterRef.current);
                setMin(0);
                setSec(0);
              }
            }
            return mprev - 0.5;
          });
          setSec(59);
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handlePause = () => {
    setPause(!pause);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => handleTimerUpdatehrs(e.target.value)}
        />
        <input
          type="text"
          onChange={(e) => handleTimerUpdatemin(e.target.value)}
        />
        <input
          type="text"
          onChange={(e) => handleTimerUpdatesec(e.target.value)}
        />
        <button onClick={handleUpdate}>Start Timer</button>
      </div>
      <p style={{ fontSize: "25px" }}>
        {hrs >= 0 && hrs !== null ? hrs + "h " : null}
        {hrs >= 0 && min <= 9 ? "0" + min + "m " : min}
        {sec <= 9 ? "0" + sec + "s" : sec + "s"}
      </p>
      <button
        onClick={() => {
          handlePause(
            pause ? setintervalfun() : clearInterval(counterRef.current)
          );
        }}
      >
        {hrs === 0 && min === 0 && sec === 0 ? "Ok" : pause ? "start" : "pause"}
      </button>
      <button
        onClick={() => {
          clearInterval(counterRef.current);
          setSec(0);
          setMin(5);
          setPause(true);
        }}
      >
        Reset
      </button>
    </div>
  );
};
