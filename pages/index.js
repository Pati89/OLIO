import { useState } from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import Article from "../components/Article";
import Footer from "../components/Footer";
import { media } from "../helpers/styles";

// we can use modules css to style our app simply importing styles from correct file like this
// import styles from "../styles/Home.module.css";
// and then use them with a className={styles.main}

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

const Home = (props) => {
  const { articles } = props;

  // load articles with useEffect and state

  // const [articles, setArticles] = useState([]);

  // Fetch Articles
  // const fetchArticles = async () => {
  //   try {
  //     const res = await fetch(
  //       "https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json"
  //     );
  //     const data = await res.json();

  //     return data;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   const getArticles = async () => {
  //     const articlesFromServer = await fetchArticles();
  //     setArticles(articlesFromServer);
  //   };

  //   getArticles();
  // }, []);

  return (
    <S_main_conteiner>
      {/* here in a Head we can add all required keywords, favicon, description
      it can be created as a component and reusable */}
      <Head>
        <title>OLIO Articles</title>
        <meta name="description" content="New Articles" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <S_main_content>
        <S_h1_title>New Articles</S_h1_title>

        {articles ? (
          <S_div_grid>
            {articles.map((item) => {
              const { id, title, user, images, status, viewed } = item;

              const userName = user?.first_name;

              console.log(item);

              return (
                <Article
                  key={id}
                  imageSrc={images[0]?.files?.medium}
                  title={title}
                  avatarSrc={user?.current_avatar?.small}
                  user={userName}
                  status={status}
                  articleId={id}
                  viewed={viewed}
                />
              );
            })}
          </S_div_grid>
        ) : (
          <p>No Articles to show</p>
        )}
      </S_main_content>
      <Footer />
    </S_main_conteiner>
  );
};

// load data with next.js
export const getStaticProps = async () => {
  const res = await fetch(
    "https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

export default Home;
