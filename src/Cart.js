import React from "react";
import CartItems from "./CartItems";
import CarTotal from "./CartTotal";

export default function Cart(props) {
  const {formatCurrency, selected} = props;

  const summary = Object.keys(selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const selectedOption = selected[feature];

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {formatCurrency(selectedOption.cost)}
        </div>
      </div>
    );
  });

  const total = Object.keys(selected).reduce(
    (acc, curr) => acc + selected[curr].cost,
    0
  );

  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {formatCurrency(total)}
        </div>
      </div>
    </section>
  );
}
