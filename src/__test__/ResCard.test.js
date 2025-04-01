import { render, screen } from "@testing-library/react";
import ResCard from "../components/ResCard";
import MOCK_DATA from "../mocks/ResCardMocks.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../components/ResCard";

it("should render Restaurant Card component with props data", () => {
  render(<ResCard resData={MOCK_DATA} />);

  const resCard_name = screen.findByText("NIC Ice Creams");

  expect(resCard_name).toBeInTheDocument;
});

it("should render Restaurant Card component with promoted label", () => {
  //Test HOC withPromotedLabel
  render(<ResCard resData={MOCK_DATA} />);

  const resCard_label = screen.findByRole("label", { name: "Promoted" });

  expect(resCard_label).toBeInTheDocument;
});
