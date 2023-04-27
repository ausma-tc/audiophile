import React from 'react'
import { Link } from 'react-router-dom';
import './Button.scss';

export default function Button(props) {
  return (
    <>
      <Link to={props.link} className={`btn btn-${props.className}`}>{props.text}</Link>
    </>
  )
}
