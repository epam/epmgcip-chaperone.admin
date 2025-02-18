import { renderHook } from '@testing-library/react';

import { usePreviousValue } from './userPreviousValue';

describe('usePreviousValue tests', () => {
  const runHook = () =>
    renderHook(({ state }) => usePreviousValue(state), { initialProps: { state: 0 } });

  test('should return original value on first render', () => {
    const { result } = runHook();

    expect(result.current).toEqual(0);
  });

  test('should return previous value on render', () => {
    const { result, rerender } = runHook();

    rerender({ state: 1 });

    expect(result.current).toBe(0);

    rerender({ state: 2 });

    expect(result.current).toBe(1);
  });
});
