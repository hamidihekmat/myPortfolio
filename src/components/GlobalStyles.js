import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: "Fira Code",monospace;
        background: ${(props) => (props.darkMode ? '#0D0F11' : 'white')};
        color: ${(props) => (props.darkMode ? 'white' : 'black')};
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
        font-weight: 800;
    }

    img {
        width:100%;
        height:100%;
        object-fit: cover;
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
