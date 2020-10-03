import React from "react";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

export default function Cart(props) {
  const { formatCurrency, selected } = props;

  const summary = Object.keys(selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const selectedOption = selected[feature];

    return (
      <CartItems
        key={featureHash}
        feature={feature}
        name={selectedOption.name}
        cost={formatCurrency(selectedOption.cost)}
      />
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
      <CartTotal total={formatCurrency(total)} />
    </section>
  );
}
