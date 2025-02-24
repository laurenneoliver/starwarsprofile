import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../App";

test("renders the app with search bar and quiz", () => {
  render(<App />);

  // Check for a heading or main elements in your App
  expect(screen.getByText("Search the Jedi Archives for your Character")).toBeInTheDocument();
  expect(screen.getByText("Which Star Wars Character Are You?")).toBeInTheDocument();
});
