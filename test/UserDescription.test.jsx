import React from "react";
import renderer from "react-test-renderer";
import { test, expect } from "@jest/globals";
import UserDescription from "../components/UserDescription";

test("proparly renders the UserDescription component", () => {
  const tree = renderer.create(<UserDescription />).toJSON();
  expect(tree).toMatchSnapshot();
});
