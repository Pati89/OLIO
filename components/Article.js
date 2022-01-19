import PropTypes from "prop-types";
import Image from "next/image";
import styles from "../styles/components/Article.module.css";

const Article = (props) => {
  const { imageSrc, imageAlt, title, description } = props;

  return (
    <div className={styles.card}>
      {/* I'm using here next.js image. This is already lazy loaded */}
      <div className={styles.image}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={150}
          height={100}
          layout="responsive"
        />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

Article.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Article;
