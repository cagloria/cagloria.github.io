import { GlobalStyles } from "./Themes";
import SkipLink from "./SkipLink";
import Header from "./Header";

export default function App() {
    return (
        <>
            <GlobalStyles />
            <SkipLink />
            <Header />
            <main id="main" className="side-padding"></main>
        </>
    );
}
