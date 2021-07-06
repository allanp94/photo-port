import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

//ensures that after each test we dont have any leftover memory data that could give us false results
afterEach(cleanup);

describe("About component", () => {
  //renders about test

  //first test
  it("renders", () => {
    render(<About />);
  });

  //second test
  it("matches snapshot DOM node structure", () => {
    //render about
    const { asFragment } = render(<About />);

    expect(asFragment()).toMatchSnapshot();
  });
});
