import { render } from '@testing-library/react';
import * as React from 'react';
import UserList from '../UserList';
import { user } from '../../../../tests/mocks/usersMock';

const mockUseFetchUsers = [user];

jest.mock('../../../hooks/useFetchUsers', () => ({
  useFetchUsers: () => mockUseFetchUsers
}));

describe('UserList component', () => {
  it('show users', async () => {
    const { findByText } = render(<UserList />);

    const element = await findByText(/samantha/i);
    expect(element).toBeTruthy();
  });
});
