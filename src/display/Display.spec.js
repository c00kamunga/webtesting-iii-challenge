// Test away!

import React from "react";
import { render } from "@testing-library/react";

describe("test tests", () => {
  test("display 'closed' if the close prop  is true", () => {
    const { getByText } = render(<Display closed={true} />);
    getByText(/closed/i);
  });

  test("display 'closed' if the close prop  is true", () => {
    const { getByText } = render(<Display closed={false} />);
    getByText(/open/i);
  });

  test("display 'locked' if the close prop  is true", () => {
    const { getByText } = render(<Display closed={true} />);
    getByText(/locked/i);
  });

  test("display 'unlocked' if the close prop  is true", () => {
    const { getByText } = render(<Display closed={false} />);
    getByText(/unlocked/i);
  });

  test("display 'unlocked' if the close prop  is true", () => {
    const { findByText } = render(<Display closed={true} />);
    getByText(/unlocked/i);
  });

  test("display 'red-led' if the closed prop  is true", () => {
    const { findByText } = render(<Display closed={true} />);
    const closed = getByText(/closed/i);
    expect(closed.classList).toContain("red-led");
  });

  test("display 'green-led' if the closed prop  is true", () => {
    const { findByText } = render(<Display closed={true} />);
    const closed = getByText(/closed/i);
    expect(closed.classList).toContain("red-led");
  });
});
