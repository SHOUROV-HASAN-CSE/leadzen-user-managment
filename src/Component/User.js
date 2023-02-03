import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

const User = () => {

const [users, SetUsers] = useState([]);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res =>res.json())
  .then(data=>SetUsers(data))
},[]);

  return (
    <div>
  {
    users.map(user=><UserCard
    key={user.id}
    user={user}
    ></UserCard>)
  }
    </div>
  );
};

export default User;