import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { media } from "../helpers/styles";

const S_a_card = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  background-color: white;

  ${media.md} {
    flex-direction: column;
  }
`;

const S_div_image = styled.div`
  background-color: lightgray;
  position: relative;
  width: 35%;
  min-height: 120px;
  max-height: 300px;
  opacity: ${({ viewed }) => (viewed ? "0.4" : "1")};

  ${media.md} {
    width: 100%;
    height: 300px;
    max-height: 300px;
  }
`;

const S_div_card_content = styled.div`
  width: 65%;
  margin: 20px;
  opacity: ${({ viewed }) => (viewed ? "0.4" : "1")};

  ${media.md} {
    width: auto;
  }
`;

const S_p_title = styled.p`
  color: inherit;
  font-weight: bold;
  transition: color 0.15s ease;
  margin-top: 0;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
  }
`;

const S_div_user_container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const S_div_avatar = styled.div`
  display: flex;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
`;

const S_div_user = styled.div`
  display: flex;
  align-items: center;
`;

const S_div_status = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ status }) => (status === "active" ? "green" : "grey")};
  color: white;
  padding: 5px;
  border-radius: 10px;
  font-size: 0.75rem;
`;

const S_span_user = styled.span`
  margin-left: ${({ avatarSrc }) => (avatarSrc ? "10px" : 0)};
`;

const S_div_viewed = styled.div`
  position: absolute;
  padding: 10px;
  background-color: white;
  border-top-left-radius: 8px;
  opacity: 1;
`;

const Article = (props) => {
  const {
    imageSrc,
    title,
    avatarSrc,
    user,
    status,
    articleId,
    onArticleClick,
    viewed,
  } = props;

  return (
    <>
      {imageSrc && (
        <Link
          href={`/article/[articleId]}`}
          as={`/article/${articleId}`}
          passHref
        >
          <S_a_card onClick={onArticleClick}>
            <S_div_image viewed={viewed} data-testid="article">
              {/* I'm using here next.js image. This is already lazy loaded */}
              <Image
                className="image"
                src={imageSrc}
                alt={title}
                layout="fill"
              />
            </S_div_image>
            <S_div_card_content viewed={viewed}>
              <S_p_title>{title}</S_p_title>
              <S_div_user_container>
                <S_div_user>
                  {avatarSrc && (
                    <S_div_avatar data-testid="avatar">
                      <Image src={avatarSrc} alt={user} layout="fill" />
                    </S_div_avatar>
                  )}
                  <S_span_user avatarSrc={avatarSrc}>{user}</S_span_user>
                </S_div_user>
                <S_div_status status={status} data-testid="status">
                  {status}
                </S_div_status>
              </S_div_user_container>
            </S_div_card_content>
            {viewed && <S_div_viewed>Viewed</S_div_viewed>}
          </S_a_card>
        </Link>
      )}
    </>
  );
};

Article.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  avatarSrc: PropTypes.string,
  user: PropTypes.string,
  status: PropTypes.string,
  onArticleClick: PropTypes.func,
};

export default Article;
