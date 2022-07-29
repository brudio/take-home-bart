import { render } from "@testing-library/react";
import { monetaryValueMocks } from "mocks/monetaryValueMocks";

import Price from "./Price";

describe("<Price />", () => {
  it("renders without crashing", () => {
    const view = render(<Price {...monetaryValueMocks} />);
    expect(view).toBeTruthy();
  });
});
