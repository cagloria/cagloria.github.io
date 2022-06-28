import { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "./Themes";
import logo from "../assets/logo.svg";
import iconGitHub from "../assets/icon-github.svg";
import iconBehance from "../assets/icon-behance.svg";

const Logo = styled.img`
    grid-row: 1;
    grid-column: 1;
    justify-self: start;
`;

const GitHubLink = styled.a`
    grid-row: 1;
    grid-column: 2;
    justify-self: center;
`;

const BehanceLink = styled.a`
    grid-row: 1;
    grid-column: 3;
    justify-self: end;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    grid-row: 2;
    grid-column: 1 / -1;

    ul {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`;

const Container = styled.header`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    display: grid;
    box-sizing: border-box;
    width: 100%;
    padding-top: 16px;
    padding-bottom: 16px;
    transition: transform 0.3s ease-out;
    background-color: ${colors.background};
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 16px;

    transform: translateY(${(props) => (props.closed ? "-65px" : "0")});

    @media screen and (prefers-reduced-motion) {
        transition: none;
    }

    @media screen and (min-width: 600px) {
        align-content: center;
        height: 78px;
        padding-top: 16px;
        grid-template-rows: auto;
        grid-template-columns: auto 1fr auto auto;
        ${GitHubLink} {
            margin-right: 24px;
            grid-column: 3;
        }

        ${BehanceLink} {
            grid-column: 4;
        }

        ${Nav} {
            grid-row: 1;
            grid-column: 2;

            ul {
                justify-content: center;
                gap: 24px;
            }
        }
    }

    @media screen and (min-width: 769px) {
        ${GitHubLink} {
            margin-right: 50px;
        }

        ${Nav} ul {
            gap: 24px;
        }
    }
`;

export default function Header() {
    // const [headerClosed, setHeaderClosed] = useState(false);
    // const [isMobile, setIsMobile] = useState(true);
    // const [previousYPos, setPreviousYPos] = useState(0);
    // const [currentYPos, setCurrentYPos] = useState(0);

    // const mobileMediaQuery = window.matchMedia("(max-width: 599px)");
    // mobileMediaQuery.addListener(handleDeviceChange);
    // handleDeviceChange(mobileMediaQuery.matches);

    // useEffect(() => {
    //     setPreviousYPos(window.scrollY);
    //     setCurrentYPos(window.scrollY);
    //     setHeaderClosed(false);
    // }, []);

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         setPreviousYPos(currentYPos);
    //         setCurrentYPos(window.scrollY);
    //         setHeaderClosed(currentYPos > previousYPos);
    //         // If user scrolls down, close header. If user scrolls up, open
    //         // header.
    //     });
    // }, [currentYPos, previousYPos]);

    // function handleDeviceChange() {
    //     console.log(mobileMediaQuery.matches);
    //     setIsMobile(mobileMediaQuery.matches);
    //     setHeaderClosed(false);
    // }

    return (
        <Container className="side-padding" /*closed={headerClosed}*/>
            <Logo src={logo} alt="C.A. Gloria logo" width="45" height="45" />

            <GitHubLink
                href="https://github.com/cagloria"
                aria-label="C.A. Gloria on GitHub"
                className="underline-link"
            >
                <img src={iconGitHub} alt="" width="40" height="40" />
            </GitHubLink>
            <BehanceLink
                href="https://www.behance.net/cagloria"
                aria-label="C.A. Gloria on Behance"
                className="underline-link"
            >
                <img src={iconBehance} alt="" width="40" height="40" />
            </BehanceLink>

            <Nav>
                <ul
                    role="menubar"
                    aria-label="Main navigation"
                    className="remove-default-list"
                >
                    <li role="none">
                        <a
                            href="#intro"
                            role="menuitem"
                            className="underline-link"
                        >
                            Home
                        </a>
                    </li>
                    <li role="none">
                        <a
                            href="#skills"
                            role="menuitem"
                            className="underline-link"
                        >
                            Skills
                        </a>
                    </li>
                    <li role="none">
                        <a
                            href="#dev"
                            role="menuitem"
                            className="underline-link"
                        >
                            Development
                        </a>
                    </li>
                    <li role="none">
                        <a
                            href="#design"
                            role="menuitem"
                            className="underline-link"
                        >
                            Design
                        </a>
                    </li>
                </ul>
            </Nav>
        </Container>
    );
}
