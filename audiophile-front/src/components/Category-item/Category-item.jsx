import React from 'react'
import LinkComponent from "../../components/Link-component/Link-component";

import './Category-item.scss';

export default function CategoryItem(props) {
  return (
    <div className="category-content">
        <img src={props.imgSrc} alt={props.imgAlt} />
        <h4>{props.headingTitle}</h4>
        <LinkComponent className={props.linkClassName} link={props.linkComponent} text={props.linkText} />
    </div>
  )
}
