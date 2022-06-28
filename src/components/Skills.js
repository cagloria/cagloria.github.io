import styled from "styled-components";
import iconReact from "../assets/icon-react.svg";
import iconHTML from "../assets/icon-html.svg";
import iconCSS from "../assets/icon-css.svg";
import iconJavaScript from "../assets/icon-javascript.svg";
import iconSass from "../assets/icon-sass.svg";
import iconGit from "../assets/icon-git.svg";
import iconGitHub from "../assets/icon-github-primary.svg";
import iconVSCode from "../assets/icon-vscode.svg";
import iconFigma from "../assets/icon-figma.svg";

const Container = styled.section`
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        li {
            display: flex;
            align-items: center;
            height: fit-content;
            margin: 0 32px 28px 0;
            border-radius: 20px;
            img {
                width: 28px;
                height: 28px;
                margin-right: 12px;
            }

            &:last-child {
                margin: 0;
            }
        }

        @media only screen and (min-width: 1025px) {
            display: grid;
            justify-content: space-between;
            max-width: 608px;
            grid-template-columns: repeat(2, auto);
            grid-auto-rows: auto;
            grid-auto-flow: row;
            row-gap: 30px;
            li {
                width: fit-content;
                margin: 0;
            }
        }
    }
`;

export default function Skills() {
    return (
        <Container id="skills">
            <h2>Skills</h2>
            <ul className="skills-ul remove-default-list">
                <li>
                    <img src={iconReact} alt="" />
                    React
                </li>
                <li>
                    <img src={iconHTML} alt="" />
                    HTML
                </li>
                <li>
                    <img src={iconCSS} alt="" />
                    CSS
                </li>
                <li>
                    <img src={iconJavaScript} alt="" />
                    JavaScript
                </li>
                <li>
                    <img src={iconSass} alt="" />
                    Sass
                </li>
                <li>
                    <img src={iconGit} alt="" />
                    Git
                </li>
                <li>
                    <img src={iconGitHub} alt="" />
                    GitHub
                </li>
                <li>
                    <img src={iconVSCode} alt="" />
                    Visual Studio Code
                </li>
                <li>
                    <img src={iconFigma} alt="" />
                    Figma
                </li>
            </ul>
        </Container>
    );
}
