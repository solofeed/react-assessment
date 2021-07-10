import { render } from '@testing-library/react';
import * as React from 'react';
import { UserRow } from '../UserRow';
import { user } from '../../../../tests/mocks/usersMock';

describe('UserRow component', () => {
  const { getByText } = render(
    <UserRow
      id={user.id}
      username={user.username}
      phone={user.phone}
      email={user.email}
      name={user.name}
      address={user.address}
    />
  );

  it('should render with passed props', () => {
    // TODO: add more expects
    expect(getByText('Username: Samantha')).toBeTruthy();
  });
});
