import { expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";

import { Header } from "./header";

test("RaceDetail", () => {
  render(<Header />);
  expect(screen.findByText("BEAST")).toBeTruthy();
});
