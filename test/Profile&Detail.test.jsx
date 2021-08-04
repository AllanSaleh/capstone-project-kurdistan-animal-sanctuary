import React from "react";
import renderer from "react-test-renderer";
import { test, expect } from "@jest/globals";
import ProfileandDetail from "../components/Profile&Detail";

test("proparly renders the Profile&Detail component", () => {
  const tree = renderer.create(<ProfileandDetail />).toJSON();
  expect(tree).toMatchSnapshot();
});
