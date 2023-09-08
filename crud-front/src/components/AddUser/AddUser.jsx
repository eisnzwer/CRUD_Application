import React, { useState } from 'react';
import style from './AddUser.module.css';

let AddUser = () => {
  let initialState = {
    name: '',
    username: '',
    email: '',
  };

  const [user, setUser] = useState(initialState);
  
  const onInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
  };

  return (
    <form 
      className={style.main} 
      onSubmit={(e) => e.preventDefault()}
      >
    <h1 className="h3 mb-3 fw-normal">Input user data</h1>
      <div className={`${style.inputsContainer} form-container container`}>
        <label htmlFor="form-floating">Name</label>
        <div className="form-floating">
          <input onChange={onInputChange} type="text" className={`form-control ${style.input}`} id="floatingInput" placeholder="name@example.com"/>
        </div>
        <label htmlFor="form-floating">Username</label>
        <div className="form-floating">
          <input onChange={onInputChange} type="text" className={`form-control ${style.input}`} id="floatingInput" placeholder="name@example.com"/>
        </div>
        <label htmlFor="form-floating">Email address</label>
        <div className="form-floating">
          <input onChange={onInputChange} type="email" className={`form-control ${style.input}`} id="floatingPassword" placeholder="Password"/>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">Create new uer</button>
      </div>
    </form>
  );
};

export default AddUser;