import "./footer.scss"

const Footer = () => {
    return (
        <footer className={"footer"}>
            <div/>
            <p className={"footer__center"}>&lt;/&gt; with 💛 by tilcer</p>
            <div className={"footer__build"}>
                <p>Version: <strong>{__APP_VERSION__}</strong></p>
                <p>Build Time: <strong>{new Intl.DateTimeFormat('cs-CZ', {
                    day: 'numeric',
                    month: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hourCycle: 'h23',
                }).format(new Date(__BUILD_TIME__))}</strong></p>
            </div>
        </footer>
    );
}

export default Footer;