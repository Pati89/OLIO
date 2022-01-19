import PropTypes from "prop-types";
import Image from "next/image";
import styled from "@emotion/styled";

const S_div_card = styled.div`
  width: 100%;
  height: 100%;
  margin: 1rem;
  /* padding: 1.5rem; */
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid black;
  /* border-radius: 10px; */
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;

const S_div_image = styled.div`
  width: 100%;
  max-width: 300px;
`;

const S_h2_title = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

const Article = (props) => {
  const { imageSrc, imageAlt, title } = props;

  return (
    <S_div_card>
      <S_div_image>
        {/* I'm using here next.js image. This is already lazy loaded */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={150}
          height={100}
          layout="responsive"
        />
      </S_div_image>
      <S_h2_title>{title}</S_h2_title>
    </S_div_card>
  );
};

Article.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
};

export default Article;
