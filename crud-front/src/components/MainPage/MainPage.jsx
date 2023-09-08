import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User/User';


let MainPage = () => {
  const LINK = 'ohio.usa';
  let initialState = [
    {
      name: 'alex',
      surname: 'krist',
      email: 'alex@mail.ru',
      id: 0,
    },
    {
      name: 'Bobi',
      surname: 'krist',
      email: 'Bobi@mail.ru',
      id: 1,
    },
    {
      name: 'James',
      surname: 'krist',
      email: 'James@mail.ru',
      id: 2,
    }
  ];

  const [users, setUsers] = useState(initialState);

  useEffect(async () => {
    let response = await axios.get(LINK);
    console.log(response);
  },[]);

  let usersNodes = users.map(user => <User id={user.id + 1} key={user.id} name={user.name} surName={user.name} email={user.email}/>);
  return (
    <table className="table table-striped">
        <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Mail</th>
      </tr>
    </thead>
    <tbody>
      {usersNodes}
    </tbody>
    </table>
  );
};

export default MainPage;