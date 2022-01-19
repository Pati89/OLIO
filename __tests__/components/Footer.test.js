import Footer from "../../components/Footer";
import { render } from "../../helpers/test-utils";

describe("Footer", () => {
  it("should render a Footer", () => {
    const { getByTestId, getByText } = render(<Footer />);

    expect(getByTestId("footer")).toBeTruthy();
    expect(getByText("Developed by")).toBeTruthy();
    expect(getByText("Patrycja Banaszczyk")).toHaveStyleRule(
      "font-weight",
      "bold"
    );
  });
});
