import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        background: ${(props) => (props.darkMode ? "#222831" : "white")};
        color: ${(props) => (props.darkMode ? "#ffff" : "#374151")};
        transition: all 500ms ease;
    }

    h1 {
        font-size: 3.3rem;
    }

    h2 {
        font-size: 2.3rem;
    }

    h3, h4 {
        font-size: 1.3rem;
        font-weight: 400;
    }

    @media screen and (max-width: 1122px) {
        nav {
            flex-direction: column;
            h3 {
                font-size: 1.2rem;
            }
        }
        

    }
`;
