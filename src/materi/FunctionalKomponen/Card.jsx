import React from "react";

export default function Cards(props) {
  return (
    <div class="card col-sm-8 col-lg-6">
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">{props.subtitle}</h6>
        <p class="card-text">
          {props.decription}
        </p>
        <a href={props.cardLink} target="blank" class="card-link">
          Going to link
        </a>
      </div>
    </div>
  );
}
