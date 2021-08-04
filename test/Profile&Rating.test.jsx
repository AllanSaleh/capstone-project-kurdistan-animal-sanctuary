import React from "react";
import renderer from "react-test-renderer";
import { test, expect } from "@jest/globals";
import ProfileandRating from "../components/Profile&Rating";

test("proparly renders the Profile&Rating component", () => {
  const tree = renderer.create(<ProfileandRating />).toJSON();
  expect(tree).toMatchSnapshot();
});
