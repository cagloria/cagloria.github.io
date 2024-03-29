import { GlobalStyles } from "./Themes";
import SkipLink from "./SkipLink";
import Header from "./Header";
import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";

export default function App() {
    return (
        <>
            <GlobalStyles />
            <SkipLink />
            <Header />
            <main id="main" className="side-padding">
                <Intro />
                <Skills />
                <Projects />
            </main>
        </>
    );
}
