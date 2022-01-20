import Home from "../../pages/index";
import { render } from "../../helpers/test-utils";

describe("Home", () => {
  it("should render a Home page", () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("articles")).toBeTruthy();
  });

  it("should render no articles", () => {
    const { getByText } = render(<Home />);
    expect(getByText("No Articles to show")).toBeTruthy();
  });

  it("should render a Home match snapshot", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
