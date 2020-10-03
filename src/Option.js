import React from "react";
import slugify from "slugify";

export default function Option(props) {
  const { item, feature, selected, update } = props;
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };
  const itemHash = slugify(JSON.stringify(item));
  return (
    <div key={itemHash} className="feature__item">
      <input
        type="radio"
        id={itemHash}
        className="feature__option"
        name={slugify(feature)}
        checked={item.name === selected[feature].name}
        onChange={(e) => update(feature, item)}
      />
      <label htmlFor={itemHash} className="feature__label">
        {item.name} ({formatCurrency(item.cost)})
      </label>
    </div>
  );
}
