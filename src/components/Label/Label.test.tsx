import { render } from "@testing-library/react";

import Label from "./Label";

describe("<Label />", () => {
  it("renders without crashing", () => {
    const wrapper = render(<Label label="Info" />);

    expect(wrapper).toBeTruthy();
  });
});
