import styled from "styled-components";
import { Container } from "../GlobalStyles";

const Results = ({ overallScore, combinedWeight }) => {
  return (
    <StyledResults>
      <Container>
        <OverallScore>{overallScore}</OverallScore>
        <OverallDesc>overall score</OverallDesc>
        <OverallDesc>
          weight: {combinedWeight && +combinedWeight.toFixed(2)}
        </OverallDesc>
      </Container>
    </StyledResults>
  );
};

export default Results;

const StyledResults = styled.div`
  background-color: ${(props) => props.theme.foregroundColor};
  padding: 24px 0;
  text-align: center;
`;

const OverallScore = styled.p`
  font-size: 70px;
  margin: 0;
`;

const OverallDesc = styled.p`
  margin: 0;
  opacity: 0.5;
  letter-spacing: 0.75px;
`;
