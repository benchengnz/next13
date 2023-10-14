// Button.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  test("renders correctly with default styles", () => {
    const { getByRole } = render(<Button>Click me</Button>);
    const button = getByRole("button", { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      backgroundColor: "hotpink",
      color: "black",
    });
  });

  test("renders correctly with custom styles", () => {
    const { getByRole } = render(
      <Button bgColor="lightblue" color="darkblue">
        Click me
      </Button>
    );
    const button = getByRole("button", { name: /click me/i });

    expect(button).toHaveStyle({
      backgroundColor: "lightblue",
      color: "darkblue",
    });
  });

  test("handles click events", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button onClick={handleClick}>Click me</Button>
    );
    const button = getByRole("button", { name: /click me/i });

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
