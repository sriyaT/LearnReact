import { render, screen } from "@testing-library/react";
import Contact from "../components/contact";
import "@testing-library/jest-dom";

describe("Contact us testcases", () => {
  test("Should load Contact Us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load submit button inside contact component", () => {
    render(<Contact />);

    const submitButton = screen.getByText("Submit");

    expect(submitButton).toBeInTheDocument();
  });
  test("Should load submit button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should load input with placeholder text `name` inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes inside contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});
