import styled from "styled-components";
import { Container } from "../GlobalStyles";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Link>
          Created by <a href="https://github.com/Naithcots">@naithcots</a>
        </Link>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.foregroundColor};
  text-align: center;
  padding: 18px;
`;

const Link = styled.p`
    margin: 0;
`

