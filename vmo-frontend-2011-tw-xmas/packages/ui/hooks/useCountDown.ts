import React from 'react';
import { now } from '@17media/dad';

const day = 1000 * 60 * 60 * 24;
const h = 1000 * 60 * 60;
const m = 1000 * 60;

const getRelatedDistance = (dist: number) => {
  return {
    d: Math.max(0, Math.floor(dist / day)),
    h: Math.max(0, Math.floor(dist / h) % 24),
    m: Math.max(0, Math.floor(dist / m) % 60),
    s: Math.max(0, Math.floor(dist / 1000) % 60),
    ms: Math.max(0, dist % 1000),
  };
};

export const useCountDown = (endTime: number) => {
  let distance = endTime - now() * 1000;

  const [count, setCount] = React.useState(distance);
  let timer = 0;

  const countDown = React.useCallback(() => {
    distance = endTime - now() * 1000;
    setCount(distance);

    if (distance > 0) {
      timer = requestAnimationFrame(countDown);
    }
  }, []);

  React.useEffect(() => {
    timer = requestAnimationFrame(countDown);
    return () => {
      cancelAnimationFrame(timer);
    };
  }, []);

  return getRelatedDistance(count);
};

export default useCountDown;
