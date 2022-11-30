// import Bilder from '../../Bilder';

const style = {
    footer: {
        display: "flex",
        justifyContent: "space-Between",
        // width: "100vw",
    }
};

function Footer() {
    // console.log(Bilder);
    return (
        <footer style={style.footer}>
            <section>
                <img src="./Bilder/Logo.png" alt="Logo"></img>
                <p>(012) 8967453</p>
                <p>woodies@gmail.com</p>
                <p>Jakarta, Indonesia</p>
            </section>
            <img src="./Bilder/Footer.png" alt="FooterPNG"></img>
        </footer>
    );
}

export default Footer;
