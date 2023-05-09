import React from "react";
import Button from "../Button/Button";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  console.log(item);

  const urlActuelle = window.location.pathname;
  let urlPath = "";

  switch (urlActuelle) {
    case "/headphones":
      urlPath = "headphones";
      break;
    case "/earphones":
      urlPath = "earphones";
      break;
    case "/speakers":
      urlPath = "speakers";
      break;
      default:
      console.log("No id");
  }

  return (
    <div className="card">
      <div className="image">
        <img
          src={
            import.meta.env.VITE_REACT_APP_UPLOAD_URL +
            item.attributes?.Image?.data?.attributes?.url
          }
          alt={item.attributes?.Image?.data?.attributes?.alternativeText}
          className="mainImg"
        />
      </div>
      <div className="content">
        {item?.attributes.isNew && <span className="overline">New product</span>}
        <h2>{item?.attributes.Title}</h2>
        <p className="description">{item?.attributes.Description}</p>
        <div className="prices">{/* <h3>${item?.attributes.price}</h3> */}</div>
        <Button className="primary" link={`/${urlPath}/${item.id}`} text="See product" />
      </div>
    </div>
  );
};

export default Card;
