import ArticleDetails from "../../components/ArticleDetails";
import { render } from "../../helpers/test-utils";

const props = {
  article: {
    images: [
      {
        files: {
          large:
            "https://cdn.olioex.com/uploads/photo/file/Y9d--jZv7f0GoLDn3SbH6A/large_image.jpg",
        },
      },
    ],
    title: "test title",
    user: {
      first_name: "Olio user",
    },
  },
};

describe("ArticleDetails", () => {
  it("should render a ArticleDetails", () => {
    const { getByTestId } = render(<ArticleDetails {...props} />);
    expect(getByTestId("articleDetails")).toBeTruthy();
  });

  it("should not render a ArticleDetails", () => {
    const { queryByTestId } = render(<ArticleDetails />);
    expect(queryByTestId("article")).toBeFalsy();
  });

  it("should render a title", () => {
    const { getByText } = render(<ArticleDetails {...props} />);
    expect(getByText("test title")).toBeTruthy();
  });

  it("should render user", () => {
    const { getByText } = render(<ArticleDetails {...props} />);
    expect(getByText("Olio user")).toBeTruthy();
  });

  it("should not render a avatar", () => {
    const { queryByTestId } = render(<ArticleDetails {...props} />);
    expect(queryByTestId("avatar")).toBeFalsy();
  });

  it("should render a avatar", () => {
    const { queryByTestId } = render(
      <ArticleDetails
        article={{
          ...props.article,
          user: {
            current_avatar: {
              small:
                "https://cdn.olioex.com/uploads/avatar/file/oZq8DF3dzLEi3Fnf4XxMrg/small_image.jpg",
            },
          },
        }}
      />
    );
    expect(queryByTestId("avatar")).toBeTruthy();
  });

  it("should render active status", () => {
    const { getByText, getByTestId } = render(
      <ArticleDetails
        article={{
          ...props.article,
          status: "active",
        }}
      />
    );
    expect(getByText("active")).toBeTruthy();
    expect(getByTestId("status")).toHaveStyleRule("background-color", "green");
  });

  it("should render other status", () => {
    const { getByText, getByTestId } = render(
      <ArticleDetails
        article={{
          ...props.article,
          status: "inactive",
        }}
      />
    );
    expect(getByText("inactive")).toBeTruthy();
    expect(getByTestId("status")).toHaveStyleRule("background-color", "grey");
  });

  it("should render description", () => {
    const { getByText, getByTestId } = render(
      <ArticleDetails
        article={{
          ...props.article,
          description:
            "7 X T0714 (yellow)\n4 X T0711 (black)\n1 X E712 (cyan)\n4 X E713 / T0713 (magenta)\n\n",
        }}
      />
    );
    expect(getByTestId("description")).toBeTruthy();
    expect(
      getByText(
        "7 X T0714 (yellow) 4 X T0711 (black) 1 X E712 (cyan) 4 X E713 / T0713 (magenta)"
      )
    ).toBeTruthy();
  });

  it("should render no description message", () => {
    const { getByText, getByTestId } = render(<ArticleDetails {...props} />);
    expect(getByTestId("description")).toBeTruthy();
    expect(getByText("No description")).toBeTruthy();
  });

  it("should render a ArticleDetails match snapshot", () => {
    const { container } = render(<ArticleDetails {...props} />);
    expect(container).toMatchSnapshot();
  });
});
