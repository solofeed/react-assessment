import { useEffect, useState } from 'react';

export const useFetchUsers = (username) => {
  const [userList, setUserList] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    const params = username ? `?username=${encodeURIComponent(username)}` : '';

    fetch(url + params)
      .then((res) => res.json())
      .then((usersData) => setUserList(usersData))
      .catch((error) => console.log(error));
  }, [username]);

  return userList;
};
