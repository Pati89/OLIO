import Article from "../../../pages/article/[id]";
import { render } from "../../../../helpers/test-utils";

describe("Article Details", () => {
  it("should render a Home page", () => {
    const { getByTestId } = render(<Article />);
    expect(getByTestId("articleDetails")).toBeTruthy();
  });

  it("should render a Article match snapshot", () => {
    const { container } = render(<Article />);
    expect(container).toMatchSnapshot();
  });
});
