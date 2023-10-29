// import React, { useState, useEffect } from "react";

// function Clock() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     setInterval(() => {
//       setTime(new Date());
//     }, 1000);
//   }, []);

//   return <div>{time.toString()}</div>;
// }

// export default Clock;
import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup function to stop the interval when the component is unmounted
    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
