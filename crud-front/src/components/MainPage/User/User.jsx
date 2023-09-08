import React from 'react';


let User = (props) => {
  return (
    <tr>
        {/* <th scope="row">{props.key}</th> */}
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.surName}</td>
        <td>{props.email}</td>
        <td><button className='btn btn-primary mx-2'>View</button></td>
        <td><button className='btn btn-outline-primary mx-2'>Edit</button></td>
        <td><button className='btn btn-danger mx-2'>Delete</button></td>
    </tr>
  );
};

export default User;