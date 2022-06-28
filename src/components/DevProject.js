import styled from "styled-components";
import { colors, font } from "./Themes";
import iconGitHub from "../assets/icon-github.svg";
import iconLink from "../assets/icon-link.svg";
import { projectDeviceQueries } from "./Themes";

const { dev } = projectDeviceQueries;

const bgOpacity = "66";

const Project = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
    box-sizing: border-box;
    border-radius: 16px;
    background-color: ${colors.primary}${bgOpacity};
    background: linear-gradient(
        90deg,
        ${colors.primary}${bgOpacity} 0%,
        ${colors.secondary}${bgOpacity} 50%,
        ${colors.tertiary}${bgOpacity} 100%
    );
    padding: 24px;
    text-align: center;
    gap: 16px;

    h3 {
        width: 100%;
        margin: 0;
    }

    & > p {
        flex-grow: 1;
        margin: 0;
    }

    @media only screen and (min-width: ${dev.twoColumn}) {
        text-align: left;

        &:nth-of-type(odd) {
            background: linear-gradient(
                90deg,
                ${colors.primary}${bgOpacity} 0%,
                ${colors.secondary}${bgOpacity} 100%
            );
        }

        &:nth-of-type(even) {
            background: linear-gradient(
                90deg,
                ${colors.secondary}${bgOpacity} 0%,
                ${colors.tertiary}${bgOpacity} 100%
            );
        }
    }

    @media only screen and (min-width: ${dev.threeColumn}) {
        &:nth-of-type(3n + 1) {
            background: linear-gradient(
                90deg,
                ${colors.primary}${bgOpacity} 0%,
                #7db8ff66 100%
            );
        }

        &:nth-of-type(3n + 2) {
            background: linear-gradient(90deg, #7db8ff66 0%, #e588d866 100%);
        }

        &:nth-of-type(3n + 3) {
            background: linear-gradient(
                90deg,
                #e588d866 0%,
                ${colors.tertiary}${bgOpacity} 100%
            );
        }
    }
`;

const TagsList = styled.ul`
    font-family: ${font.heading};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    column-gap: 24px;
    row-gap: 12px;
    li {
        font-size: 1em;
    }
`;

const LinksList = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 12px;
    gap: 48px;
    img {
        width: 36px;
        height: 36px;
    }
`;

function GitHubLink({ link, title }) {
    return (
        <a
            href={link}
            aria-label={`${title} on GitHub`}
            className="underline-link"
        >
            <img src={iconGitHub} alt="" />
        </a>
    );
}

function DemoLink({ link, title }) {
    return (
        <a href={link} aria-label={`${title} demo`} className="underline-link">
            <img src={iconLink} alt="" />
        </a>
    );
}

export default function DevProject({
    title,
    desc,
    demoLink,
    tags,
    gitHubLink,
}) {
    return (
        <Project>
            <h3>{title}</h3>
            <p>{desc}</p>
            <TagsList className="remove-default-list">
                {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </TagsList>
            <LinksList>
                {gitHubLink !== undefined ? (
                    <GitHubLink link={gitHubLink} title={title} />
                ) : undefined}
                {demoLink !== undefined ? (
                    <DemoLink link={demoLink} title={title} />
                ) : undefined}
            </LinksList>
        </Project>
    );
}
