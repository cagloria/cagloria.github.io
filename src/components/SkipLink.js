import styled from "styled-components";
import { colors } from "./Themes";

const Link = styled.a`
    position: fixed;
    z-index: 9;
    top: -25px;
    left: 0;
    transition: transform 0.3s ease-out;
    transition-delay: 2s;
    background-color: ${colors.background};
    &:focus {
        transition-delay: 0s;
        transform: translateY(25px);
    }
`;

export default function SkipLink() {
    return <Link href="#main">Skip to main content</Link>;
}
