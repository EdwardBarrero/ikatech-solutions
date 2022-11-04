import Text from "../../../../app-common/domain/atoms/text/Text";
import ItemOrganismPreview from "../../organism/item-organism-preview/Item-organism-preview";
import { DICTIONARY } from "../../../../app-common/domain/constants/dictionary";

import "./detail-template-item.scss";
import { useAppSelector } from "../../../../hooks";
import ItemOrganismDetail from "../../organism/item-organism-detail/Item-organism-detail";
export default function DetailTemplateItem() {
  const shoe = useAppSelector(state => state['products']['shoe']);
  return (
    <div>
      <Text text={DICTIONARY.path.toUpperCase() + shoe?.nombre.toUpperCase()} textColor='secondary' fw="bold ms-5 mt-2"/>
      <ItemOrganismPreview/>
      <ItemOrganismDetail/>
    </div>
  )
}
