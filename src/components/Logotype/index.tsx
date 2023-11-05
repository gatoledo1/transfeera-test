import bancodobrasil from "../../assets/logos/bancodobrasil.jpg"
import bradesco from "../../assets/logos/bradesco.jpg"
import caixa from "../../assets/logos/caixa.jpg"
import itau from "../../assets/logos/itau.jpg"
import nubank from "../../assets/logos/nubank.jpg"
import santander from "../../assets/logos/santander.jpg"
import other from "../../assets/logos/other.png"

const BankLogo = ({name}) => {
  const bankImags = {
    bancodobrasil,
    bradesco,
    caixa,
    "itaú": itau,
    itau,
    nubank,
    santander,
    other
  }

  return (
    <img src={bankImags[name.toLowerCase().replaceAll(" ", "")]} width={26} alt="logotype" />
  )
}

export default BankLogo