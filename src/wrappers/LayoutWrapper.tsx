import {ReactNode} from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import "./layoutWrapper.scss"

type Props = {
    children: ReactNode;
}

const LayoutWrapper = ({children}: Props) => {
    return (
        <div className={"layoutWrapper"}>
            <Header/>
            <main className={"layoutWrapper__content"}>
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default LayoutWrapper;