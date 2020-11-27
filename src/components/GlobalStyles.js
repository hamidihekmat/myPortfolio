import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        background: #222831;
        color: #ffffff;
    }

    h1 {
        font-size: 4rem;
    }

    h2 {
        font-size: 2.5rem;
    }

    h3, h4 {
        font-size: 1.5rem;
        font-weight: 400;
    }

    @media screen and (max-width: 1122px) {
        nav {
            flex-direction: column;
            h3 {
                font-size: 1rem;
            }
        }

    }
`;
