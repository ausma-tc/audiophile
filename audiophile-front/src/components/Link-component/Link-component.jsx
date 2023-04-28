import React from "react";
import { Link } from "react-router-dom";
import "./Link-component.scss";

export default function LinkComponent(props) {
  return (
    <>
      <Link to={props.link} className={`link-${props.className}`}>
        {props.text}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="4"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="square"
            strokeLinejoin="square"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </Link>
    </>
  );
}
