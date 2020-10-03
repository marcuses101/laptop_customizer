import React from "react";
import slugify from "slugify";
import Component from "./Component";

export default function Customize(props) {
  const { features, selected, update } = props;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const components = Object.entries(features).map(([featureName,featureOptions], idx) => {
    const featureHash = featureName + "-" + idx;
    return <Component name={featureName} options={featureOptions} selected={selected} key={featureHash} update={update}/>;
  })
      // const options = featureOptions.map((item) => {
      //   const itemHash = slugify(JSON.stringify(item));
      //   return (
      //     <div key={itemHash} className="feature__item">
      //       <input
      //         type="radio"
      //         id={itemHash}
      //         className="feature__option"
      //         name={slugify(featureName)}
      //         checked={item.name === selected[featureName].name}
      //         onChange={(e) => update(featureName, item)}
      //       />
      //       <label htmlFor={itemHash} className="feature__label">
      //         {item.name} ({formatCurrency(item.cost)})
      //       </label>
      //     </div>
      //   );
      // });

    //   return (
    //     <fieldset className="feature" key={featureHash}>
    //       <legend className="feature__name">
    //         <h3>{featureName}</h3>
    //       </legend>
    //       {options}
    //     </fieldset>
    //   );
    // });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {components}
      </form>
    );
  }
