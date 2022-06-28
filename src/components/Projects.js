import styled from "styled-components";
import DevProject from "./DevProject";
import DesignProject from "./DesignProject";
import data from "../data/data.json";
import { projectDeviceQueries } from "./Themes";

const { twoColumn, threeColumn } = projectDeviceQueries;

const ProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-auto-flow: row;
    gap: 16px;
    @media only screen and (min-width: ${twoColumn}) {
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (min-width: ${threeColumn}) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export default function Projects() {
    const { dev, design } = data;

    return (
        <>
            <section id="dev">
                <h2>Development Projects</h2>
                <ProjectsContainer>
                    {dev.map((project) => (
                        <DevProject
                            title={project.title}
                            desc={project.desc}
                            demoLink={project.demoLink}
                            tags={project.tags}
                            gitHubLink={project.gitHubLink}
                            key={project.title}
                        />
                    ))}
                </ProjectsContainer>
            </section>
            <section id="design">
                <h2>Design Projects</h2>
                <ProjectsContainer>
                    {design.map((project) => (
                        <DesignProject
                            img={project.img}
                            title={project.title}
                            desc={project.desc}
                            behanceLink={project.behanceLink}
                            key={project.title}
                        />
                    ))}
                </ProjectsContainer>
            </section>
        </>
    );
}
