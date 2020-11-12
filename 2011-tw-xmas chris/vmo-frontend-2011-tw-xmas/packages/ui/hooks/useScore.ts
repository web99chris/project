import { useState, useEffect } from 'react';

import { animation } from '@vmo/share/utils';

const useScore = (initialScore: number, duration = 1000) => {
  const [score, setScore] = useState(initialScore);
  useEffect(() => {
    animation(duration, percent => {
      const newScore = score + Math.round(percent * (initialScore - score));
      setScore(newScore);
    });
  }, [initialScore]);
  return score;
};

export default useScore;
