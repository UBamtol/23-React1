import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const realTime = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(realTime);
  }, []);

  return (
    <>
      <h1>안녕, 리액트!</h1>
      <h2>현재 시간: {time.toLocaleTimeString()}</h2>
    </>
  );
};

export default Clock;
