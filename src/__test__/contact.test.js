import { render, screen } from "@testing-library/react";
import Contact from "../components/contact";
import "@testing-library/jest-dom";

describe("Contact us testcases", () => {
  it("Should load Contact Us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load submit button inside contact component", () => {
    render(<Contact />);

    const submitButton = screen.getByText("Submit");

    expect(submitButton).toBeInTheDocument();
  });
  it("Should load submit button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should load input with placeholder text `name` inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes inside contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});
