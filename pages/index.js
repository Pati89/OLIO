import { useEffect, useState } from "react";
import Head from "next/head";
import Article from "../components/Article";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [articles, setArticles] = useState([]);

  // Fetch Articles
  const fetchArticles = async () => {
    try {
      const res = await fetch(
        "https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json"
      );
      const data = await res.json();

      return data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getArticles = async () => {
      const articlesFromServer = await fetchArticles();
      setArticles(articlesFromServer);
    };

    getArticles();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>OLIO Articles</title>
        <meta name="description" content="Newest OLIO Articles" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Newest Articles</h1>

        <div className={styles.grid}>
          {articles.map((item) => (
            <Article
              key={item?.id}
              imageSrc={item?.images[0]?.files?.medium}
              imageAlt={item?.title}
              title={item?.title}
            />
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Developed by <span className={styles.bold}>Patrycja Banaszczyk</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;
