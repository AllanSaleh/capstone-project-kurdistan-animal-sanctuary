import React from "react";
import renderer from "react-test-renderer";
import { test, expect } from "@jest/globals";
import AnimalInformation from "../components/AnimalInformation";

test("proparly renders the AnimalInformation component", () => {
  const tree = renderer.create(<AnimalInformation />).toJSON();
  expect(tree).toMatchSnapshot();
});
