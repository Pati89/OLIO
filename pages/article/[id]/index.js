import Head from "next/head";
import styled from "@emotion/styled";
import ArticleDetails from "../../../components/ArticleDetails";
import Footer from "../../../components/Footer";
import { media } from "../../../helpers/styles";

const S_main_conteiner = styled.div`
  margin: 0 20px;

  ${media.md} {
    margin: 0 50px;
  }

  ${media.lg} {
    margin: 0 auto;
    max-width: 900px;
  }
`;

const S_main_content = styled.main`
  min-height: 100vh;
  padding: 50px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const S_h1_title = styled.h1`
  margin: 0;
  padding-bottom: 50px;
  line-height: 1.15;
  font-size: 3rem;
`;

const S_div_grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;

  ${media.md} {
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  ${media.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Article = (props) => {
  const { article } = props;

  return (
    <S_main_conteiner data-testid="articleDetails">
      <Head>
        <title>Article</title>
        <meta name="description" content="Article Details" />
      </Head>
      <S_main_content>
        <ArticleDetails {...props} />
      </S_main_content>
      <Footer />
    </S_main_conteiner>
  );
};

// load article details with next.js
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    "https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json"
  );
  const articles = await res.json();

  const article = articles.filter((item) => item.id.toString() === params.id);

  return {
    props: {
      article: article[0],
    },
  };
};

// load paths with next.js
export const getStaticPaths = async () => {
  const res = await fetch(
    "https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json"
  );

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Article;
