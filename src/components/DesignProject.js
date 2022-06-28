import styled from "styled-components";
import { colors } from "./Themes";
import iconBehance from "../assets/icon-behance.svg";
import { projectDeviceQueries } from "./Themes";

const { twoColumn, threeColumn } = projectDeviceQueries;

const bgOpacity = "66";

const Project = styled.div`
    display: flex;
    overflow: hidden;
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

    text-align: center;
    gap: 16px;

    > img {
        width: 100%;
        height: 175px;
        object-fit: cover;

        @media screen and (min-width: 700px) {
            height: 250px;
        }
    }

    > div {
        display: flex;
        align-items: center;
        flex-direction: column;
        flex-grow: 1;
        box-sizing: border-box;
        padding: 0 24px 24px;
        text-align: center;
        gap: 16px;
    }

    h3 {
        width: 100%;
        margin: 0;
    }

    p {
        flex-grow: 1;
        margin: 0;
    }

    @media only screen and (min-width: ${twoColumn}) {
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

    @media only screen and (min-width: ${threeColumn}) {
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

function BehanceLink({ link, title }) {
    return (
        <a
            href={link}
            aria-label={`${title} on Behance`}
            className="underline-link"
        >
            <img src={iconBehance} alt="" />
        </a>
    );
}

export default function DesignProject({ img, title, desc, behanceLink }) {
    return (
        <Project>
            <img src={img} alt="" />
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <LinksList>
                    <BehanceLink link={behanceLink} title={title} />
                </LinksList>
            </div>
        </Project>
    );
}
