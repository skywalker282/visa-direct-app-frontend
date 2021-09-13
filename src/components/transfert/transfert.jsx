
const Transfert = props => {
    return (
        <div>
            <form className="signin-form">
                <div className="input-field">
                    <label htmlFor="first-name">Prénom</label>
                    <input type="text" name="fist-name" id="first-name" />
                </div>
                <div className="input-field">
                    <label htmlFor="second-name">Nom</label>
                    <input type="text" name="second-name" id="second-name" />
                </div>
                <div className="input-field">
                    <label htmlFor="third-name">Post-nom</label>
                    <input type="text" name="third-name" id="third-name" />
                </div>
                <div className="input-field">
                    <label htmlFor="num-visa">Num. Carte Visa</label>
                    <input type="number" name="num-visa" id="num-visa" />
                </div>
                <div className="input-field">
                    <label htmlFor="num-visa-dest">Num. Carte Visa destinataire</label>
                    <input type="number" name="num-visa-dest" id="num-visa-dest" />
                </div>
                <div className="input-field">
                    <label htmlFor="devise">Devise</label>
                    <select name="devises" id="devises">
                        <option value="fc">Franc Congolais</option>
                        <option value="ussd">Dollar US</option>
                        <option value="euro">Franc Euro</option>
                    </select>
                </div>
                <div className="input-field">
                    <label htmlFor="amount">Montant</label>
                    <input type="number" name="amount" id="amount" />
                </div>
                <div className="agree">
                    <input type="checkbox" name="agree" id="agree" />
                    <p>En soumettant ce transfert, vous agréer avec notre <a href="/politics">politique de transfert des fonds</a></p>
                </div>
                <div className="submit">
                    <input type="submit" value="Transfert" />
                </div>
            </form>
        </div>
    )
}

export default Transfert