import { render, screen } from "@testing-library/react";
import { Gentleman } from "./gentleman";

test("renders learn react link", () => {
  render(
    <Gentleman
      name={""}
      status={""}
      profession={""}
      twitter={""}
      picture={""}
      alternativeText={""}
    />
  );
  const linkElement = screen.getByText(/Profession/);
  expect(linkElement).toBeInTheDocument();
});
