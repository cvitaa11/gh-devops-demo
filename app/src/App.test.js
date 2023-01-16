import { render } from "@testing-library/react";
import App from "./App";

test("check button text", () => {
  const app = render(<App />);

  const buttonElement = app.container.querySelector("#submit-btn");
  expect(buttonElement).toHaveTextContent("Check");
});
