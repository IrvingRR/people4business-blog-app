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

        --error-color: #f83b3b

        --font-family: 'Inter', sans-serif;
        --fs-sm: 0.75rem; // 12px
        --fs-md: 0.875; // 14px
        --fs-lg: 1.25rem; // 20px
        --fs-xl: 1.875rem; // 30px
        --fs-xxl: 2.1875rem; // 35px
        --fs-xxxl: 2.5rem: // 40px

        --raidus: 10px;
        --radius-rounded: 80px;
        --transition: 0.2s ease;
    }

    /* Simple Global Styles */
    body {
        font-family: var(--font-family);
        font-size: var(--fs-md);
    }

    input,
    button,
    textarea,
    select {
        outline: none;
        border: 1px solid transparent;
        transition: var(--transition);
        font-family: var(--font-family);
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