import { createGlobalStyle } from "styled-components";

export const colors = {
    primary: "#4acafd",
    secondary: "#8c95ff",
    tertiary: "#ff729f",
    background: "#2d2d2d",
    text: "#f5f5f5",
    gradient:
        "linear-gradient(90deg, #4acafd 0%, #b7a2fb 51.04%, #ff729f 100%)",
};

export const font = {
    heading: '"Roboto Condensed", sans-serif',
    body: '"PT Sans", sans-serif',
};

export const projectDeviceQueries = {
    twoColumn: "755px",
    threeColumn: "1800px",
};

export const GlobalStyles = createGlobalStyle`
    .side-padding {
        padding-left: 5vw;
        padding-right: 5vw;

        @media only screen and (min-width: 426px) {
            padding-left: 8vw;
            padding-right: 8vw;
        }

        @media only screen and (min-width: 1025px) {
            padding-left: 15vw;
            padding-right: 15vw;
        }

        @media only screen and (min-width: 2000px) {
            padding-left: 24vw;
            padding-right: 24vw;
        }
    }

    html {
        scroll-behavior: smooth;

        @media screen and (prefers-reduced-motion) {
            scroll-behavior: auto;
        }
    }

    body {
        font-family: ${font.body};
        margin: 0;
        color: ${colors.text};
        background: ${colors.background};
    }

    main {
        padding-top: 0;
        padding-bottom: 100px;
    }

    section {
        padding-top: 100px;
        &:last-child {
            padding-bottom: 0;
        }

        @media only screen and (min-width: 700px) {
            padding-top: 108px;
        }
    }
    

    h1,
    h2,
    h3 {
        font-family: ${font.heading};
        font-weight: 300;
        line-height: 150%;
    }

    h1 {
        font-size: clamp(5em, 10vw, 6em);
    }

    h2 {
        font-size: 3em;
        position: relative;
        margin: 0 0 24px;
        &::before {
            position: absolute;
            top: -16px;
            left: 0;
            display: block;
            width: 50%;
            height: 4px;
            content: "";
            border-radius: 4px;
            background-color: ${colors.primary};
            background-image: ${colors.gradient};
            @media only screen and (min-width: 600px) {
                width: 33%;
            }

            @media only screen and (min-width: 769px) {
                width: 25%;
            }
        }
    }

    h3 {
        font-size: 2em;
    }

    p,
    li {
        font-size: 1.125em;
        line-height: 150%;
    }

    p {
        margin-bottom: 32px;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: ${colors.text};
    }

    .underline-link {
        position: relative;
        text-align: center;
        &::after {
            position: absolute;
            bottom: -2px;
            left: 50%;
            display: block;
            width: 110%;
            height: 2px;
            content: "";
            transition: transform 0.3s ease-out;
            transform: translateX(-50%) scaleX(0);
            border-radius: 4px;
            background-color: white;
            background-image: ${colors.gradient};
        }

        &:hover {
            &::after {
                transform: translateX(-50%) scaleX(1);
            }
        }

        &:active {
            &::after {
                transform: translateX(-50%) scaleX(1);
                background-color: ${colors.primary};
                background-image: none;
            }
        }
    }

    .remove-default-list {
        padding-left: 0;
        list-style-type: none;
        margin: 0;
    }
`;
