import React from 'react';
import scss from './Main.module.scss';
import IconsBrand from '../IconsBrand';


export default function Main() {
  return (
    <div className={scss.Main}>
      <h1 className={scss.title}>Account <span>Login</span></h1>

      <input type="text" placeholder='Username or Email' className={scss.inp} />
      <input type="text" placeholder='Password' className={scss.inp} />

      <button className={scss.btn}>Login to your Account</button>

      <div className={scss.bottomText}><hr />Login with your Sociol Account<hr /></div>
    
      <IconsBrand></IconsBrand>
    </div>
  )
}
