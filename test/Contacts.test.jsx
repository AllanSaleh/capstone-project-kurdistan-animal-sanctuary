import React from "react";
import renderer from "react-test-renderer";
import { test, expect } from "@jest/globals";
import ContactUs from "../components/ContactUsBody";

test("proparly renders the ContactUs component", () => {
  const tree = renderer.create(<ContactUs />).toJSON();
  expect(tree).toMatchSnapshot();
});
