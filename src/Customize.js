import React from "react";
import Component from "./Component";

export default function Customize(props) {
  const { features, selected, update } = props;


  const Components = Object.entries(features).map(([featureName,featureOptions], idx) => {
    const featureHash = featureName + "-" + idx;
    return <Component name={featureName} options={featureOptions} selected={selected} key={featureHash} update={update}/>;
  })

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {Components}
      </form>
    );
  }
