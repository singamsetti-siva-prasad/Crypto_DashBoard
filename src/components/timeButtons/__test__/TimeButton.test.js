import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import TimeButton from "../TimeButton";
import "@testing-library/jest-dom";

const MockedTimeButton = () => {
  return (
    <Provider store={store}>
      <TimeButton />
    </Provider>
  );
};

describe("Time button", () => {
  it("should show button name", async () => {
    render(<MockedTimeButton />);
    const buttonElement = screen.getByRole("button", {
      name: /1d/i,
    });

    expect(buttonElement).toBeInTheDocument();
  });
});
