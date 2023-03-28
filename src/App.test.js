import { getByRole, render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import FormField from "./pages/widgetManagement/dynamicHtml/FormField";
import { FormProvider, useFieldArray } from "react-hook-form";

/* test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

jest.mock("react-flip-move", () => ({ children }) => <div>{children}</div>);
jest.mock("react-tooltip", () => jest.fn());

describe("Create Dynamic Html", () => {
  it("enables the form field when checkbox is clicked", () => {
    render(
      <FormProvider>
        <FormField />;
      </FormProvider>
    );
    const checkbox = screen.getByRole("checkbox");

    // screen.debug();
    userEvent.click(checkbox);

    expect(screen.getByTestId("title")).not.toBeDisabled();
  });
});
