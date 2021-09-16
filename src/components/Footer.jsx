
const Footer = props => {
    return (
        <>
            <div className="footer">
                <ul className="about-block">
                    <li>
                        <h4 className="footTitle">A propos</h4>
                        <p>SafeTinda est une plateforme qui vous permet d'envoyer de l'argent partout en RDC et à qui vous voulez. La plateforme offre une interface USSD qui vous permet d'interragir avec votre compte Visa même sans Internet.</p>
                    </li>
                    <li>
                        <h4 className="footTitle">Adresses</h4>
                        <address>Avenu du fleuve No 234, Commune Ngaliema Kinshasa</address>
                    </li>
                    <li>
                        <h4 className="footTitle">Contacts</h4>
                        <p>Téléphone : <a href="tel:+243976380527">+243 976 380 527</a></p>
                        <p>Mail: <a href="mailto:celiitellu@gmail.com">celiitellu@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Footer;