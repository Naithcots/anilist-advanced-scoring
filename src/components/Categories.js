import styled from "styled-components";
import Category from "./Category";

const Categories = ({ categoriesArr, setCategories }) => {
  return (
    <StyledCategories>
      {categoriesArr &&
        categoriesArr.map((cat) => (
          <Category
            categoryData={cat}
            setCategories={setCategories}
            key={cat.id}
          />
        ))}
    </StyledCategories>
  );
};

export default Categories;

const StyledCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  justify-content: space-between;
  gap: 14px;
`;
