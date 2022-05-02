import styled from "styled-components";

const ThemeButton = ({ switchTheme }) => {
  return <StyledThemeButton onClick={switchTheme} />;
};

export default ThemeButton;

const StyledThemeButton = styled.img.attrs((props) => ({
  src: `/assets/icons/theme-light-dark-${props.theme.src}.png`,
}))`
  color: #fff;
  cursor: pointer;
  transition: transform 0.125s ease-in-out;

  &:hover {
    transform: rotateX(45deg);
  }
`;
