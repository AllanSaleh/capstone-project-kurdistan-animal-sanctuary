import React from "react";
import renderer from "react-test-renderer";
import { test, expect } from "@jest/globals";
import AnimalOfWeek from "../components/AnimalOfWeek";

test("proparly renders the AnimalOfWeek component", () => {
  const tree = renderer.create(<AnimalOfWeek />).toJSON();
  expect(tree).toMatchSnapshot();
});
