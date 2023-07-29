import React from "react";

export default function FunctionalComponent(props) {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <span class="navbar-brand mb-0 h1">{props.brand}</span>
      </div>
    </nav>
  );
}

FunctionalComponent.defaultProps = {
    brand:"default brand"
}