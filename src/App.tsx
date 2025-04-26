import HomePage from "./pages/HomePage.tsx";
import LayoutWrapper from "./wrappers/LayoutWrapper.tsx";
import {useAtomValue} from "jotai/react";
import {tokenAtom} from "./atomStore.ts";
import {isJwtValid} from "./utils/isJwtValid.ts";
import youShallNotPass from "./assets/you-shall-not-pass.gif";

function App() {
    const token = useAtomValue(tokenAtom);
    const tokenValid = isJwtValid(token);

    return (
        <LayoutWrapper>
            {tokenValid ? <HomePage/> : <img src={youShallNotPass} alt={""}/> }
        </LayoutWrapper>
    )
}

export default App
