import styled from "styled-components";
import { colors } from "./Themes";

const TextPrimaryColor = styled.span`
    color: ${colors.primary};
`;

const TextSecondaryColor = styled.span`
    color: ${colors.secondary};
`;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding: 174px 0 32px 0;
    text-align: center;
    gap: 24px;
    h1 {
        position: relative;
        margin: 0;
        &::after {
            position: absolute;
            bottom: -2px;
            left: 50%;
            display: block;
            width: 100%;
            height: 4px;
            content: "";
            transform: translateX(-50%);
            border-radius: 4px;
            background-color: ${colors.primary};
            background-image: ${colors.gradient};
        }
    }

    p {
        margin: 0;
    }

    @media only screen and (min-width: 600px) {
        h1,
        p {
            max-width: 550px;
            text-align: left;
        }
    }
`;

export default function Intro() {
    return (
        <Container id="intro">
            <h1>
                <TextPrimaryColor className="color-primary">
                    C.A.
                </TextPrimaryColor>
                <TextSecondaryColor className="color-secondary">
                    Gloria
                </TextSecondaryColor>
            </h1>
            <p>
                I'm a developer focused on frontend web development and UI
                design. I'm currently working on personal projects and improving
                my skills.
            </p>
        </Container>
    );
}
