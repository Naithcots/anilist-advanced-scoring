import styled from "styled-components";
import { Container } from "../GlobalStyles";
import ThemeButton from "../ThemeButton";

const Header = ({ switchTheme }) => {
  return (
    <StyledHeader>
      <Container>
        <LogoSection>
          <Logo>ALASC</Logo>
          <Desc>AniList Advanced Scoring Calculator</Desc>
        </LogoSection>
        <ThemeButton switchTheme={switchTheme} />
      </Container>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.foregroundColor};
  padding: 12px;

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const LogoSection = styled.div``;

const Logo = styled.h1`
  letter-spacing: 1px;
  margin: 0;
`;

const Desc = styled.span`
  display: block;
  font-size: 12px;
  margin-top: -2.5px;
`;
