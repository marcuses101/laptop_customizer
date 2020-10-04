import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "enzyme";
import toJson from "enzyme-to-json";
import FEATURES from "./FEATURES"


describe("laptop-customizer", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App features={FEATURES} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("matches original snapshot", () => {
    const wrapper = render(<App features={FEATURES} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
