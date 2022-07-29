import { render } from "@testing-library/react";

import InputField from "./InputField";

describe("<InputField />", () => {
  it("renders without crashing", () => {
    const view = render(
      <InputField>
        <div />
      </InputField>
    );
    expect(view).toBeTruthy();
  });
});
