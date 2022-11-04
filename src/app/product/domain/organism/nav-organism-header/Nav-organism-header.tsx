import Link from "../../../../app-common/domain/atoms/link/Link";
import Image from "../../../../app-common/domain/atoms/image/Image";
import InputTextIcon from "../../../../app-common/domain/molecule/inputText-icon/InputText-icon";
import Text from "../../../../app-common/domain/atoms/text/Text";
import { DICTIONARY } from "../../../../app-common/domain/constants/dictionary";
import { NAV_CONSTANTS_ONE } from "../../constants/navConstants";
import { ICONS_CONSTANTS } from "../../../../app-common/domain/constants/icon-constants";

import "./nav-organism-header.scss"
export default function NavOrganismHeader() {
  return (
    <>
    <nav className="d-flex bg-color-2 justify-content-end pe-5 py-1">
    {NAV_CONSTANTS_ONE.map((item) => (
      <div key={item.title}>
        <Link text={item.title.toUpperCase()} className='fs-8 fw-bold mx-2' href={item.link} textColor='color-3'/>
      </div>
    ))}
    </nav>
    <div className="d-flex justify-content-between">
      <div className="d-flex align-items-end ms-5 my-3">
        <Image src={require('../../../../../assets/img/dog.jpeg')} className='hush-puppies-logo-size' />
        <Image src={require('../../../../../assets/img/name.jpeg')} className='hush-puppies-name-size mb-2 ms-2' />
      </div>
      <div className="d-flex flex-column align-items-end my-3 me-5">
        <InputTextIcon placeholder={DICTIONARY.search.toUpperCase()} classInput='py-2 ps-3 pe-5 fw-bold' icon={ICONS_CONSTANTS.CHEVRON_RIGHT} fs='5' />
        <Text text={DICTIONARY.freeSend.toUpperCase()} textColor='color-1' fs=" mt-3" />
      </div>
    </div>
    </>
  )
}
