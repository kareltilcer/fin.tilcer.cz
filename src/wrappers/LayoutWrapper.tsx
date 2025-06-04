import {ReactNode} from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import {Layout} from 'antd';

const {Content} = Layout;

type Props = {
    children: ReactNode;
}

const LayoutWrapper = ({children}: Props) => {
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header/>
            <Content style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                padding: '16px 16px 60px 16px',
                flex: 1
            }}>
                {children}
            </Content>
            <Footer/>
        </Layout>
    );
}

export default LayoutWrapper;