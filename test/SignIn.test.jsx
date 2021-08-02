import React from "react";
import renderer from "react-test-renderer";
import { test, expect } from "@jest/globals";
import Signin from "../components/signin";

test("proparly renders the Signin component", () => {
  const tree = renderer.create(<Signin />).toJSON();
  expect(tree).toMatchSnapshot();
});
