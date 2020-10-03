import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mount, render } from "enzyme";
import toJson from "enzyme-to-json";
import "@testing-library/jest-dom"
import Customize from "./Customize"
import FEATURES from "./FEATURES"

const selected = {
  Processor: {
    name: "17th Generation Intel Core HB (7 Core with donut spare)",
    cost: 700,
  },
  "Operating System": {
    name: "Ubuntu Linux 16.04",
    cost: 200,
  },
  "Video Card": {
    name: "Toyota Corolla 1.5v",
    cost: 1150.98,
  },
  Display: {
    name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
    cost: 1500,
  },
};



describe("Customize component", ()=>{
  it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Customize features={FEATURES} selected={selected}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})