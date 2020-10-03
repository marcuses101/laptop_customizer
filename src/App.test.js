import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "enzyme";
import toJson from "enzyme-to-json";

const FEATURES = {
  Processor: [
    {
      name: "17th Generation Intel Core HB (7 Core with donut spare)",
      cost: 700,
    },
    {
      name: "Professor X AMD Fire Breather with sidewinder technology",
      cost: 1200,
    },
  ],
  "Operating System": [
    {
      name: "Ubuntu Linux 16.04",
      cost: 200,
    },
    {
      name: "Bodhi Linux",
      cost: 300,
    },
  ],
  "Video Card": [
    {
      name: "Toyota Corolla 1.5v",
      cost: 1150.98,
    },
    {
      name: "Mind mild breeze 2000",
      cost: 1345,
    },
  ],
  Display: [
    {
      name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
      cost: 1500,
    },
    {
      name: '15.3" HGTV (3840 x 2160) Home makeover edition',
      cost: 1400,
    },
  ],
};

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
