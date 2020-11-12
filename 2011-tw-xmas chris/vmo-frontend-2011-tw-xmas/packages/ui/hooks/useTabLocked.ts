// 2002-tw-alliance
import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from 'react';
import { now } from '@17media/dad';

const useTabLocked = (lockDate: string) => {
  const getT4Locked = useCallback(() => {
    const t4LockTime = new Date(lockDate);
    const nowTime = now() * 1000;
    const t4LockedCal = nowTime - t4LockTime.getTime() >= 0;
    return t4LockedCal;
  }, []);
  const [t4Locked, setT4Locked] = useState(getT4Locked());
  const timeoutKey = useRef(0);
  useEffect(() => {
    timeoutKey.current = setInterval(() => {
      const t4LockedInterval = getT4Locked();
      if (t4LockedInterval) {
        setT4Locked(t4LockedInterval);
      }
    }, 1000);
    return () => {
      clearInterval(timeoutKey.current);
    };
  }, []);
  return t4Locked;
};

export default useTabLocked;
