import * as React from 'react';
import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserList from '../../components/taskone/UserList';
import { useFetchUsers } from '../useFetchUsers';

jest.mock('../../hooks/useFetchUsers', () => ({
  useFetchUsers: jest.fn(() => [])
}));

// Test via UserList render and useFetchUsers hook
describe('useDebounce', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  it('should call useFetchUsers after 5000 ms after typing', async () => {
    await act(async () => {
      jest.useFakeTimers();

      const { getByPlaceholderText } = render(<UserList />);
      const input = getByPlaceholderText('Enter username');

      await userEvent.paste(input, 'val');

      jest.advanceTimersByTime(5000);

      expect(useFetchUsers.mock.calls[2][0]).toEqual('val');

      jest.runAllTimers();
    });
  });

  it('should not call useFetchUsers before 5000 ms after typing', async () => {
    await act(async () => {
      jest.useFakeTimers();

      const { getByPlaceholderText } = render(<UserList />);
      const input = getByPlaceholderText('Enter username');

      await userEvent.paste(input, 'val');

      jest.advanceTimersByTime(4999);
      expect(useFetchUsers.mock.calls[2]).toEqual(undefined);
      jest.runAllTimers();
    });
  });
});
