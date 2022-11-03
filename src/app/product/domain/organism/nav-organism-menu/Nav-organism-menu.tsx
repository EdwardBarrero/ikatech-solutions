import Link from "../../../../app-common/domain/atoms/link/Link";
import Text from "../../../../app-common/domain/atoms/text/Text";
import { NAV_CONSTANTS_TWO } from "../../constants/navConstants";
import { ICONS_CONSTANTS } from "../../../../app-common/domain/constants/icon-constants";
import { DICTIONARY } from "../../../../app-common/domain/constants/dictionary";
import Icon from "../../../../app-common/domain/atoms/icon/Icon";

export default function NavOrganismMenu() {
  return (
    <div className="d-flex justify-content-between border-bottom border-dark pb-1">
      <nav className="d-flex ms-5 py-1">
        {NAV_CONSTANTS_TWO.map((item) => (
        <div key={item.title}>
            <Link text={item.title.toUpperCase()} className='fs-6 fw-bold mx-3' href={item.link} textColor='color-3'/>
        </div>
        ))}
      </nav>
      <div>
        <Icon icon={ICONS_CONSTANTS.LOCK} />
        <Text text={DICTIONARY.carShop.toUpperCase() + " $0"} fs=' me-5' textColor='color-3' fw='bold' />
      </div>
    </div>
  )
}
