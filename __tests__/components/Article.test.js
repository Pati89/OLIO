import Article from "../../components/Article";
import { render } from "../../helpers/test-utils";

const props = {
  imageSrc:
    "https://cdn.olioex.com/uploads/photo/file/Y9d--jZv7f0GoLDn3SbH6A/medium_image.jpg",
  title: "test title",
  user: "Olio user",
};

describe("Article", () => {
  it("should render a Article", () => {
    const { getByTestId } = render(<Article {...props} />);
    expect(getByTestId("article")).toBeTruthy();
  });

  it("should not render a Article", () => {
    const { queryByTestId } = render(<Article />);
    expect(queryByTestId("article")).toBeFalsy();
  });

  it("should render a title", () => {
    const { getByText } = render(<Article {...props} />);
    expect(getByText("test title")).toBeTruthy();
  });

  it("should render user", () => {
    const { getByText } = render(<Article {...props} />);
    expect(getByText("Olio user")).toBeTruthy();
  });

  it("should not render a avatar", () => {
    const { queryByTestId } = render(<Article {...props} />);
    expect(queryByTestId("avatar")).toBeFalsy();
  });

  it("should render a avatar", () => {
    const { queryByTestId } = render(
      <Article
        {...props}
        avatarSrc="https://cdn.olioex.com/uploads/avatar/file/oZq8DF3dzLEi3Fnf4XxMrg/small_image.jpg"
      />
    );
    expect(queryByTestId("avatar")).toBeTruthy();
  });

  it("should render active status", () => {
    const { getByText, getByTestId } = render(
      <Article {...props} status="active" />
    );
    expect(getByText("active")).toBeTruthy();
    expect(getByTestId("status")).toHaveStyleRule("background-color", "green");
  });

  it("should render other status", () => {
    const { getByText, getByTestId } = render(
      <Article {...props} status="inactive" />
    );
    expect(getByText("inactive")).toBeTruthy();
    expect(getByTestId("status")).toHaveStyleRule("background-color", "grey");
  });
});
