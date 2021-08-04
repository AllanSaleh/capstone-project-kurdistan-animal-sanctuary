import React from "react";
import renderer from "react-test-renderer";
import { test, expect } from "@jest/globals";
import Navbutton from "../components/slidersArrow";

test("proparly renders the Navbutton component", () => {
  const tree = renderer.create(<Navbutton />).toJSON();
  expect(tree).toMatchSnapshot();
});
