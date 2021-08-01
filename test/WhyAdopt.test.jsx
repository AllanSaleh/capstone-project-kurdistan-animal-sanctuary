import React from "react";
import renderer from "react-test-renderer";
import { test, expect } from "@jest/globals";
import WhyAdopto from "../components/WhyAdopt";

test("proparly renders the WhyAdopto component", () => {
  const tree = renderer.create(<WhyAdopto />).toJSON();
  expect(tree).toMatchSnapshot();
});
