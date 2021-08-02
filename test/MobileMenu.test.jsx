import React from "react";
import renderer from "react-test-renderer";
import { test, expect } from "@jest/globals";
import MobileMenu from "../components/MobileMenu";

test("proparly renders the MobileMenu component", () => {
  const tree = renderer.create(<MobileMenu />).toJSON();
  expect(tree).toMatchSnapshot();
});
