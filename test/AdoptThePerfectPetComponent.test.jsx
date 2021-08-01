import React from "react";
import renderer from "react-test-renderer";
import { test, expect } from "@jest/globals";
import AdoptThePerfectPetComponent from "../components/AdoptThePerfectPetComponent";

test("proparly renders the AdoptThePerfectPetComponent component", () => {
  const tree = renderer.create(<AdoptThePerfectPetComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
