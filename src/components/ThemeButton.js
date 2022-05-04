import styled from "styled-components";

const ThemeButton = ({ switchTheme }) => {
  return <StyledThemeButton onClick={switchTheme} />;
};

export default ThemeButton;

const StyledThemeButton = styled.img.attrs((props) => ({
  src: `${process.env.PUBLIC_URL}/assets/icons/theme-light-dark-${props.theme.src}.png`,
  alt: "Theme",
}))`
  color: #fff;
  cursor: pointer;
`;
