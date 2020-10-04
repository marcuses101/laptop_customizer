import React from "react";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

export default function Cart(props) {
  const { selected } = props;

  const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

  const summary = Object.entries(selected).map(([feature,{name,cost}], idx) => {
    const featureHash = feature + "-" + idx;

    return (
      <CartItems
        key={featureHash}
        feature={feature}
        name={name}
        cost={formatCurrency(cost)}
      />
    );
  });

  const total = Object.values(selected).reduce(
    (acc, {cost}) => acc + cost,
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
