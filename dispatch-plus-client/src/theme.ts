import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  colors: {
    bgColor: "#0c1017",
    primary: "#003db8",
    secondary: "#497cd4",
    font: "#ebeff5",
    fontMuted: "#c3c4c4",
    fontDisabled: "#2b2929",
  },
};

export const lightTheme = {};

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${({ theme }) => theme.colors.bgColor};
  color: ${(props) => props.theme.colors.font};  
  -webkit-font-smoothing: antialiased;
  // scroll bar
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) =>
    `${theme.borderMutedColor} ${theme.colors.bgColor}`};
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.bgColor};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.fontDisabled};
    border-radius: 5px;
  }
}


#root{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;
}

a{
  text-decoration:none;   
  color: ${({ theme }) => theme.colors.font};
}

`;
