import { render } from "@testing-library/react";

import DashboardHome from "./DashboardHome";

describe("<DashboardHome />", () => {
  it("renders without crashing", () => {
    const view = render(<DashboardHome />);
    expect(view).toBeTruthy();
  });
});
