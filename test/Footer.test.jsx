import React from "react";
import renderer from "react-test-renderer";
import { test, expect } from "@jest/globals";
import Footer from "../components/Footer";

test("proparly renders the Footer component", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
