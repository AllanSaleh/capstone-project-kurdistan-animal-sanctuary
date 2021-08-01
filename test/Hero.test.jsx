import React from "react";
import renderer from "react-test-renderer";
import { test, expect } from "@jest/globals";
import Hero from "../components/Hero";

test("proparly renders the Hero component", () => {
  const tree = renderer.create(<Hero />).toJSON();
  expect(tree).toMatchSnapshot();
});
