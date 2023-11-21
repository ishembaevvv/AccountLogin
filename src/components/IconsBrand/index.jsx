import React from 'react';
import scss from './Icons.module.scss';
import 'boxicons';

export default function IconsBrand() {
  return (
    <div className={scss.container}>
      <box-icon name="gmail" type="logo"></box-icon>
      <box-icon name="facebook" type="logo"></box-icon>
      <box-icon name="google" type="logo"></box-icon>
      <box-icon name="twitter" type="logo"></box-icon>
    </div>
  )
}
