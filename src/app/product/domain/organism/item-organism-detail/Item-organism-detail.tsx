import Text from "../../../../app-common/domain/atoms/text/Text";
import { DICTIONARY } from "../../../../app-common/domain/constants/dictionary";
import "./item-organism-detail.scss";
export default function ItemOrganismDetail() {
  return (
    <div className="mx-5">
      <Text text={DICTIONARY.itemDetail.toUpperCase()} fs='5' textColor="secondary mt-5 pb-1 border-bottom border-2" fw="bold"/>
      <Text text={DICTIONARY.loremIpnusTwo} fs='6' textColor="secondary mt-3"/>
      <Text text={DICTIONARY.technologies.toUpperCase()} fs='5' textColor="secondary mt-5 pb-1 border-bottom border-2" fw="bold"/>
      <Text text={DICTIONARY.loremIpnusOne} fs='6' textColor="secondary my-3"/>
    </div>
  )
}
