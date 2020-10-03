import React from "react";

export default function CartItems(props) {
  const { feature, name, cost } = props;

  return (
    <div className="summary__option">
      <div className="summary__option__label">{feature} </div>
      <div className="summary__option__value">{name}</div>
      <div className="summary__option__cost">{cost}</div>
    </div>
  );
}
