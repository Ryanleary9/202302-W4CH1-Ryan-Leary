import { render, screen } from "@testing-library/react";
import { Info } from "./info";

test("renders learn react link", () => {
  render(<Info />);
  const linkElement = screen.getByText(/The pointing gentlemen/);
  expect(linkElement).toBeInTheDocument();
});
