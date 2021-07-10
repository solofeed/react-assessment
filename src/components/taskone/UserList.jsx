import React, { useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { useFetchUsers } from '../../hooks/useFetchUsers';
import { UserRow } from './UserRow';
import { Users } from '../styled-components/UserList';

const UserList = () => {
  const [filter, setFilter] = useState('');
  const debouncedFilter = useDebounce(filter);
  const users = useFetchUsers(debouncedFilter);

  return (
    <div>
      <div>
        Filter:
        <input
          type="text"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          placeholder="Enter username"
        />
      </div>
      <Users>
        {users.map((user) => (
          <UserRow
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            address={user.address}
            email={user.email}
            phone={user.phone}
          />
        ))}
      </Users>
    </div>
  );
};

export default UserList;
