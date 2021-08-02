import React from "react";
import renderer from "react-test-renderer";
import { test, expect } from "@jest/globals";
import SingUp from "../components/SingUp";

test("proparly renders the SingUp component", () => {
  const tree = renderer.create(<SingUp />).toJSON();
  expect(tree).toMatchSnapshot();
});
