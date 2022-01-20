import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { media } from "../helpers/styles";
import { getByText } from "@testing-library/react";

const S_div_container = styled.div`
  width: 70%;
  height: 100%;
  text-align: left;
  color: inherit;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  background-color: white;

  ${media.md} {
    width: 80%;
  }
`;

const S_div_image = styled.div`
  background-color: lightgray;
  position: relative;
  width: 100%;
  height: 400px;
  max-height: 400px;

  ${media.md} {
    height: 600px;
    max-height: 600px;
  }
`;

const S_div_card_content = styled.div`
  width: 100%;
  padding: 20px;

  ${media.md} {
    width: auto;
  }
`;

const S_h1_title = styled.h1`
  color: inherit;
  font-weight: bold;
  margin-top: 0;
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

const S_div_divider = styled.div`
  width: calc(100% - 40px);
  margin: 0 20px;
  height: 1px;
  border-top: 1px solid lightgrey;
`;

const S_div_description = styled.div`
  padding: 0 20px 20px;
`;

const S_div_description_content = styled.div`
  white-space: pre-wrap;
`;

const S_p_description_title = styled.p`
  font-weight: bold;
`;

const S_span_user = styled.span`
  margin-left: ${({ avatarSrc }) => (avatarSrc ? "10px" : 0)};
`;

const S_a_back = styled.a`
  display: flex;
  align-items: center;
  width: 70%;
  background-color: rgb(240, 238, 238);
  padding: 10px 0;

  ${media.md} {
    width: 80%;
  }
`;

const S_i_arrow_back = styled.i`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
  margin-right: 10px;
`;

const Article = (props) => {
  const { article } = props;

  const imageSrc = article?.images[0]?.files?.large;
  const articleTitle = article?.title;
  const avatarSrc = article?.user?.current_avatar?.small;
  const user = article?.user?.first_name;
  const status = article?.status;
  const description = article?.description || "No description";

  return (
    <>
      <Link href="/" passHref>
        <S_a_back>
          <S_i_arrow_back /> Back
        </S_a_back>
      </Link>
      <S_div_container data-testid="articleDetails">
        {imageSrc && (
          <S_div_image>
            <Image
              className="image"
              src={imageSrc}
              alt={articleTitle}
              layout="fill"
            />
          </S_div_image>
        )}
        <S_div_card_content>
          <S_h1_title>{articleTitle}</S_h1_title>
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
        <S_div_divider />
        <S_div_description>
          <S_p_description_title>Description:</S_p_description_title>
          <S_div_description_content
            data-testid="description"
            dangerouslySetInnerHTML={{
              __html: `${description}`,
            }}
          />
        </S_div_description>
      </S_div_container>
    </>
  );
};

Article.propTypes = {
  article: PropTypes.object,
};

export default Article;
