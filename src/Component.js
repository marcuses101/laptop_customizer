import React from 'react'
import slugify from "slugify";

export default function Component(props) {
  const  {name, options, selected, update} = props

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const Options = options.map((item) => {
    const itemHash = slugify(JSON.stringify(item));
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(name)}
          checked={item.name === selected[name].name}
          onChange={(e) => update(name, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({formatCurrency(item.cost)})
        </label>
      </div>
    );
  });

  return (
    <fieldset className="feature">
      <legend className="feature__name">
        <h3>{name}</h3>
      </legend>
      {Options}
    </fieldset>
  );
}
