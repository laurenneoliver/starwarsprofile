import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Searchbar from "../Searchbar";

describe("Searchbar Component", () => {
  test("renders the search input field", () => {
    render(<Searchbar onSearch={jest.fn()} />);
    
    // Check if the input field is in the document
    expect(screen.getByPlaceholderText("Search for characters...")).toBeInTheDocument();
  });

  test("updates input value when typing", () => {
    render(<Searchbar onSearch={jest.fn()} />);
    
    const input = screen.getByPlaceholderText("Search for characters...");
    
    fireEvent.change(input, { target: { value: "Luke Skywalker" } });
    
    expect(input.value).toBe("Luke Skywalker");
  });
});
