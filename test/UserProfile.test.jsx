import React from "react";
import renderer from "react-test-renderer";
import { test, expect } from "@jest/globals";
import UserProfile from "../components/UserProfile";

test("proparly renders the UserProfile component", () => {
  const tree = renderer.create(<UserProfile />).toJSON();
  expect(tree).toMatchSnapshot();
});
