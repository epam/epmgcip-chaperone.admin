import { useEffect, useRef } from 'react';

export const usePreviousValue = <T>(value: T) => {
  const ref = useRef<T>(value);

  useEffect(() => {
    if (ref.current !== value) {
      ref.current = value;
    }
  });

  return ref.current;
};
