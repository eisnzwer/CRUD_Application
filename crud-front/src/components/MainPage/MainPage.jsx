import React from 'react';
import User from './User/User';

let MainPage = () => {
  let users = [
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