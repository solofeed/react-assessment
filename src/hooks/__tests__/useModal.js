import { act, renderHook } from '@testing-library/react-hooks';
import { useModal } from '../useModal';

describe('useModal', () => {
  it('should return false at initial hook execution', async () => {
    const { result } = renderHook(() => useModal());
    expect(result.current[0]).toBeFalsy();
  });

  it('should return true after toggle call', async () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBeTruthy();
  });
});
