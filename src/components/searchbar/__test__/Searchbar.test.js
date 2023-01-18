import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Searchbar from "../Searchbar";
import { store } from "../../../app/store";

const MockedSearchbar = () => {
  return (
    <Provider store={store}>
      <Searchbar />
    </Provider>
  );
};

describe("Searchbar", () => {
  it("should be able to type input", async () => {
    render(<MockedSearchbar />);
    const inputElement = screen.getByPlaceholderText(
      /Search Crypto Currencies/i
    );
    fireEvent.change(inputElement, { target: { value: "bitcoin" } });
    expect(inputElement.value).toBe("bitcoin");
  });
});
