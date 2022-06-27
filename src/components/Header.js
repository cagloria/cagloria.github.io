import { useState } from "react";
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

    transform: translateY(${(props) => (props.closed ? "-60px" : "0")});

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
    const [headerClosed, setHeaderClosed] = useState(false);

    const MEDIA = { mobileMediaQuery: window.matchMedia("(max-width: 599px)") };
    const SCROLL = (() => {
        let _previousPos = window.scrollY;

        const getPrevious = () => _previousPos;

        function setPrevious(newPos) {
            _previousPos = newPos;
        }

        return { setPrevious, getPrevious };
    })();

    window.onload = function () {
        addMediaQuery();
    };

    window.onscroll = function () {
        changeHeader();
    };

    /**
     * If the device has changed to tablet layout or wider, show the header
     */
    function handleDeviceChange() {
        if (!MEDIA.mobileMediaQuery.matches) {
            showHeader();
        }
    }

    function isMobile() {
        const { mobileMediaQuery } = MEDIA;
        mobileMediaQuery.addListener(handleDeviceChange);
        return mobileMediaQuery.matches;
    }

    /**
     * Hides the mobile header to show the bottom half, showing only navigation
     * links and hiding social links
     */
    function hideHeader() {
        setHeaderClosed(true);
    }

    /**
     * Shows the entire header when scrolling up on mobile, or when switching to
     * tablet or desktop devices
     */
    function showHeader() {
        setHeaderClosed(false);
    }

    function addMediaQuery() {
        const { mobileMediaQuery } = MEDIA;
        mobileMediaQuery.addListener(handleDeviceChange);
        handleDeviceChange(mobileMediaQuery);
    }

    /**
     * If on mobile and the user scrolls down, hide the bottom layer of the header
     */
    function changeHeader() {
        if (isMobile()) {
            let current = window.scrollY;

            if (current > SCROLL.getPrevious()) {
                hideHeader();
            } else {
                showHeader();
            }

            SCROLL.setPrevious(current);
        } else {
            showHeader();
        }
    }

    return (
        <Container className="side-padding" closed={headerClosed}>
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
                        <a href="#intro" role="menuitem" class="underline-link">
                            Home
                        </a>
                    </li>
                    <li role="none">
                        <a
                            href="#skills"
                            role="menuitem"
                            class="underline-link"
                        >
                            Skills
                        </a>
                    </li>
                    <li role="none">
                        <a href="#dev" role="menuitem" class="underline-link">
                            Development
                        </a>
                    </li>
                    <li role="none">
                        <a
                            href="#design"
                            role="menuitem"
                            class="underline-link"
                        >
                            Design
                        </a>
                    </li>
                </ul>
            </Nav>
        </Container>
    );
}
