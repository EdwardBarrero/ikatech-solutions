import Text from "../../../../app-common/domain/atoms/text/Text";
import { DICTIONARY } from "../../../../app-common/domain/constants/dictionary";
import "./nav-organism-offers.scss";

export default function NavOrganismOffers(){
  return (
    <div className="bg-color-1 text-center p-1">
      <Text text={DICTIONARY.offers} textColor="white" fw='bold' fs='5'/>
    </div>
  )
}