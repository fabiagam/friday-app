/*************************************
 * Test
 * @file: tests/page.test.jsx
 * @author: James Abiagam
 ************************************/
import { render, screen } from "@testing-library/react";
import Header from "../components/header";

const title = "Car Availability Directory";

describe("Header Component of a Page", () => {
  it("should render with Page title", () => {
    render(<Header title={title} />);
  });
});
