import { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../GlobalStyles";
import Categories from "./Categories";
import Results from "./Results";

const defaultCategoriesArr = [
  { id: 1, name: "story", weight: 0.25 },
  { id: 2, name: "characters", weight: 0.2 },
  { id: 3, name: "visuals", weight: 0.1 },
  { id: 4, name: "audio", weight: 0.1 },
  { id: 5, name: "enjoyment", weight: 0.35 },
];

const Calculator = () => {
  const [categories, setCategories] = useState(null);
  const [overallScore, setOverallScore] = useState(null);
  const [combinedWeight, setCombinedWeight] = useState(null);

  useEffect(() => {
    let newCategories = [];
    let newCombinedWeight = 0;
    defaultCategoriesArr.forEach((cat) => {
      newCategories.push({ ...cat, score: "" });
      newCombinedWeight += cat.weight;
    });
    setCategories(newCategories);
    setCombinedWeight(newCombinedWeight);
  }, []);

  useEffect(() => {
    setOverallScore("-");
    if (categories && !categories.find((cat) => cat.score === "")) {
      let newOverallScore = 0;
      let newCombinedWeight = 0;
      categories.forEach((cat) => {
        newOverallScore += cat.score * cat.weight;
        newCombinedWeight += +cat.weight;
      });
      setOverallScore(
        newCombinedWeight === 1 ? parseInt(newOverallScore) : "Wrong weight"
      );
      setCombinedWeight(newCombinedWeight);
    }
  }, [categories]);

  return (
    <StyledCalculator>
      <CalculatorContainer>
        <Categories categoriesArr={categories} setCategories={setCategories} />
        <Results overallScore={overallScore} combinedWeight={combinedWeight} />
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
