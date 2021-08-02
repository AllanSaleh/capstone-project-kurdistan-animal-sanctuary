import React from "react";
import "babel-polyfill";
import renderer from "react-test-renderer";
import { test, expect } from "@jest/globals";
import PetShowcase from "../components/PetShowcase";

test("proparly renders the PetShowcase component", () => {
  const tree = renderer.create(<PetShowcase />).toJSON();
  expect(tree).toMatchSnapshot();
});
