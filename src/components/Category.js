import styled from "styled-components";
import { keyframes } from "styled-components";

const Category = ({ categoryData, setCategories }) => {
  const handleChange = (e) => {
    let value = parseInt(e.target.value);
    value = isNaN(value) ? "" : value;
    if (value === "" || (value >= 0 && value <= 100)) {
      setCategories((prev) => {
        const update = prev.map((e) =>
          e.id === categoryData.id ? { ...e, score: value } : e
        );
        return update;
      });
    }
  };

  return (
    <StyledCategory>
      <Title>{categoryData.name}</Title>
      <ScoreInput onChange={handleChange} value={categoryData.score} required />
      <Weight>
        <WeightNumber>{categoryData.weight}</WeightNumber>
        <WeightDesc>weight</WeightDesc>
      </Weight>
    </StyledCategory>
  );
};

export default Category;

const anim = keyframes`
  from {
    opacity: .25;
    transform: rotateX(45deg);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg);
  }
`;

const StyledCategory = styled.div`
  background-color: ${(props) => props.theme.foregroundColor};
  padding: 20px 0;
  text-align: center;
  border-radius: 12px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 5fr;
  gap: 20px;
  animation: ${anim} 0.25s ease-in-out;
`;

const Title = styled.p`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1.125px;
  margin: 0;
`;

const ScoreInput = styled.input.attrs(() => ({
  type: "text",
}))`
  border: none;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};

  font-size: 46px;
  width: 70%;
  max-width: 125px;
  /* border-radius: 16px; */
  text-align: center;

  display: flex;
  justify-self: center;

  &:focus {
    outline: 1px solid rgba(255, 255, 255, 25%);
  }
`;

const Weight = styled.div`
  margin: 0;
`;

const WeightNumber = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 300;
`;

const WeightDesc = styled.span`
  display: block;
  opacity: 0.5;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.5px;
`;
