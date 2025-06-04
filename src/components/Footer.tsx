import {Layout, Typography} from 'antd';

const {Footer: AntFooter} = Layout;
const {Text} = Typography;

const Footer = () => {
    return (
        <AntFooter style={{
            background: 'black',
            color: 'white',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            fontFamily: 'monospace',
            padding: '10px 20px'
        }}>
            <div/>
            <Text style={{textAlign: 'center', color: 'white'}}>&lt;/&gt; with 💛 by tilcer</Text>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: '8px',
                gap: '8px',
                margin: 0,
                textAlign: 'end'
            }}>
                <Text style={{margin: 0, color: 'white'}}>Version: <strong>{__APP_VERSION__}</strong></Text>
                <Text style={{margin: 0, color: 'white'}}>Build Time: <strong>{new Intl.DateTimeFormat('cs-CZ', {
                    day: 'numeric',
                    month: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hourCycle: 'h23',
                }).format(new Date(__BUILD_TIME__))}</strong></Text>
            </div>
        </AntFooter>
    );
}

export default Footer;