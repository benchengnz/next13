import { render, fireEvent } from "@testing-library/react";
import Counter from "./counter";

test("renders Counter and increments count", () => {
  // Render the component
  const { getByText, getByTestId } = render(<Counter />);

  // Check that the initial count is 0
  expect(getByTestId("count").textContent).toBe("0");

  // Find the button and click it
  const button = getByText("+ plus");
  fireEvent.click(button);

  // Check that the count has been incremented to 1
  expect(getByTestId("count").textContent).toBe("1");
});
