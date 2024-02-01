import { keyframes } from "styled-components";

export const spinnerAnimation = keyframes`
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
`;