import PropTypes from "prop-types";
import Image from "next/image";
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
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  ${media.md} {
    flex-direction: column;
  }
`;

const S_div_image = styled.div`
  position: relative;
  width: 35%;
  height: 100%;
  max-height: 300px;

  ${media.md} {
    width: 100%;
    height: 300px;
    max-height: 300px;
  }
`;

const S_div_card_content = styled.div`
  width: 65%;
  margin: 20px;

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

const Article = (props) => {
  const { imageSrc, imageAlt, title, avatarSrc, avatarAlt, user, status } =
    props;

  return (
    <>
      {imageSrc && (
        <S_a_card onClick={() => {}} data-testid="article">
          <S_div_image>
            {/* I'm using here next.js image. This is already lazy loaded */}
            <Image
              className="image"
              src={imageSrc}
              alt={imageAlt}
              layout="fill"
            />
          </S_div_image>
          <S_div_card_content>
            <S_p_title>{title}</S_p_title>
            <S_div_user_container>
              <S_div_user>
                {avatarSrc && (
                  <S_div_avatar data-testid="avatar">
                    <Image src={avatarSrc} alt={avatarAlt} layout="fill" />
                  </S_div_avatar>
                )}
                <S_span_user avatarSrc={avatarSrc}>{user}</S_span_user>
              </S_div_user>
              <S_div_status status={status} data-testid="status">
                {status}
              </S_div_status>
            </S_div_user_container>
          </S_div_card_content>
        </S_a_card>
      )}
    </>
  );
};

Article.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  avatarSrc: PropTypes.string,
  avatarAlt: PropTypes.string,
  user: PropTypes.string,
  status: PropTypes.string,
};

export default Article;
