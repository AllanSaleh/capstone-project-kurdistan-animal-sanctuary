import React from "react";
import renderer from "react-test-renderer";
import { test, expect } from "@jest/globals";
import AnimalCards from "../components/AnimalCards";

test("proparly renders the AnimalCards component", () => {
  const tree = renderer.create(<AnimalCards />).toJSON();
  expect(tree).toMatchSnapshot();
});
