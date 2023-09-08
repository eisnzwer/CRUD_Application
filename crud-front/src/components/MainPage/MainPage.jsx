import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User/User';
import { useParams } from 'react-router-dom';

export const LINK = 'ohio.usa';

let MainPage = () => {
  let initialState = [
    {
      name: 'alex',
      username: 'krist',
      email: 'alex@mail.ru',
      id: 0,
    },
    {
      name: 'Bobi',
      username: 'krist',
      email: 'Bobi@mail.ru',
      id: 1,
    },
    {
      name: 'James',
      username: 'krist',
      email: 'James@mail.ru',
      id: 2,
    }
  ];

  // const {id} = useParams();

  const [users, setUsers] = useState(initialState);

  // useEffect(async () => {
  //   let response = await axios.get(LINK);
  //   setUsers(response.data);
  // },[]);

  const deleteUser = async (id) => {
    await axios.delete(`${LINK}/user/${id}`);
    setUsers();
  };

  let usersNodes = users.map(user => <User id={user.id + 1} key={user.id} name={user.name} username={user.username} email={user.email} onDelete={deleteUser}/>);
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