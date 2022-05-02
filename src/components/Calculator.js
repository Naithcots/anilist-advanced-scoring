import { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../GlobalStyles";
import Categories from "./Categories";
import Results from "./Results";

const categoriesArr = [
  { id: 1, name: "story", weight: 0.3 },
  { id: 2, name: "characters", weight: 0.2 },
  { id: 3, name: "visuals", weight: 0.1 },
  { id: 4, name: "audio", weight: 0.1 },
  { id: 5, name: "enjoyment", weight: 0.3 },
];

const Calculator = () => {
  const [categories, setCategories] = useState(null);
  const [overallScore, setOverallScore] = useState(null);

  useEffect(() => {
    let newCategories = [];
    categoriesArr.forEach((cat) => newCategories.push({ ...cat, score: "" }));
    setCategories(newCategories);
  }, []);

  useEffect(() => {
    setOverallScore("-");
    if (categories && !categories.find((cat) => cat.score === "")) {
      let newOverallScore = 0;
      categories.forEach((cat) => {
        newOverallScore += cat.score * cat.weight;
      });
      setOverallScore(parseInt(newOverallScore));
    }
  }, [categories]);

  return (
    <StyledCalculator>
      <CalculatorContainer>
        <Categories categoriesArr={categories} setCategories={setCategories} />
        <Results overallScore={overallScore} />
      </CalculatorContainer>
    </StyledCalculator>
  );
};

export default Calculator;

const StyledCalculator = styled.div``;

const CalculatorContainer = styled(Container)`
  display: grid;
  gap: 24px;
`;
