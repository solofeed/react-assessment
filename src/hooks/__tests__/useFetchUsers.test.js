import { renderHook } from '@testing-library/react-hooks';
import { act } from '@testing-library/react';
import { useFetchUsers } from '../useFetchUsers';
import { user } from '../../../tests/mocks/usersMock';

describe('useFetchUsers hook', () => {
  beforeAll(() => jest.spyOn(window, 'fetch'));

  it('calls correct endpoint with proper params', async () => {
    const mockedUsers = [user];
    const username = 'val';
    const expectedUrl = `https://jsonplaceholder.typicode.com/users?username=${username}`;

    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockedUsers,
    });

    await act(async () => {
      const { result, waitForNextUpdate } = renderHook(() => useFetchUsers(username));

      await waitForNextUpdate();

      expect(result.current).toEqual(mockedUsers);
    });

    expect(window.fetch).toHaveBeenCalledWith(expectedUrl);
    expect(window.fetch).toHaveBeenCalledTimes(1);
  });
});
