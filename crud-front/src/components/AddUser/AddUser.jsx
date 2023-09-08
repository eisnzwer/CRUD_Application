import React from 'react';
import style from './AddUser.module.css';

let AddUser = () => {
  `${style.inputsContainer} form-container container`;
  return (
    <form 
      className={style.main} 
      >
    <h1 className="h3 mb-3 fw-normal">Input user data</h1>
      <div className={`${style.inputsContainer} form-container container`}>
        <label htmlFor="form-floating">Name</label>
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
        </div>
        <label htmlFor="form-floating">Username</label>
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
        </div>
        <label htmlFor="form-floating">Email address</label>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">Create new uer</button>
      </div>
    </form>
  );
};

export default AddUser;