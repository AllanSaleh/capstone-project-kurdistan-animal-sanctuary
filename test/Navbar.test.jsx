import React from "react";
import renderer from "react-test-renderer";
import { test, expect } from "@jest/globals";
import Navbar from "../components/Navbar";

test("proparly renders the AnimalOfWeek component", () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
