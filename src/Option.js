import React from "react";
import slugify from "slugify";

export default function Option(props) {
  const { item, id, name, checked, update } = props;
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };
  const itemHash = slugify(JSON.stringify(item));
  return (
    <div className="feature__item">
      <input
        type="radio"
        id={id}
        className="feature__option"
        name={slugify(name)}
        checked={checked}
        onChange={() => update(name, item)}
      />
      <label htmlFor={itemHash} className="feature__label">
        {item.name} ({formatCurrency(item.cost)})
      </label>
    </div>
  );
}
