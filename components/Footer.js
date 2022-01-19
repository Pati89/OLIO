import styled from "@emotion/styled";

const S_footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`;

const S_span_bold = styled.span`
  font-weight: bold;
`;

const Footer = () => {
  return (
    <S_footer data-testid="footer">
      <p>
        Developed by <S_span_bold>Patrycja Banaszczyk</S_span_bold>
      </p>
    </S_footer>
  );
};

export default Footer;
