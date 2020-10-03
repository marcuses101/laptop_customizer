import React from "react";
import slugify from "slugify";
import Option from "./Option";

export default function Component(props) {
  const { name, options, selected, update } = props;

  const Options = options.map((item) => {
    const itemHash = slugify(JSON.stringify(item));
    return (
      <Option
        item={item}
        key={itemHash}
        id={itemHash}
        name={name}
        checked={item.name === selected[name].name}
        update={update}
      />
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
