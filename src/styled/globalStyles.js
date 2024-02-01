import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* Variables */
    :root {
        --primary-color: #fb98bb;
        --primary-color-hover: #f14378;
        --primary-color-disabled: #fccedf;

        --secondary-color: #7ef7ba;
        --secondary-color-hover: #3fe993;
        --secondary-color-disabled: #b6fcd8;

        --error-color: #f83b3b;
        --white-color: #fff;

        --font-family: 'Inter', sans-serif;
        --fs-sm: 10px; // 12px
        --fs-md: 12px; // 14px
        --fs-lg: 18px; // 20px
        --fs-xl: 30px; // 30px
        --fs-xxl: 35px; // 35px
        --fs-xxxl: 40px; // 40px

        --radius: 5px;
        --radius-rounded: 80px;
        --transition: 0.2s ease;
    }

    /* Simple Global Styles */
    body {
        font-family: var(--font-family);
        font-size: var(--fs-md);
        min-height: 100vh;
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.fontColor};
    }

    input,
    button,
    textarea,
    select {
        outline: none;
        border: 1px solid transparent;
        transition: var(--transition);
        font-family: var(--font-family);
        font-size: var(--fs-md);
    }

    button {
        cursor: pointer
    }

    a {
        text-decoration: none;
        transition: var(--transition);
    }

    ul, li {
        list-style: none;
    }

`;