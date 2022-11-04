import Text from "../../../../app-common/domain/atoms/text/Text";
import Link from "../../../../app-common/domain/atoms/link/Link";
import InputTextIcon from "../../../../app-common/domain/molecule/inputText-icon/InputText-icon";
import { DICTIONARY } from "../../../../app-common/domain/constants/dictionary";
import { NAV_CONSTANTS_FOOTER_CUSTOMER_SERVICES, NAV_CONSTANTS_FOOTER_MEANS, NAV_CONSTANTS_FOOTER_MY_ACCOUNT } from "../../constants/navConstants";
import { ICONS_CONSTANTS } from "../../../../app-common/domain/constants/icon-constants";
import "./footer-organism-companyServices.scss";
export default function FooterOrganismCompanyServices() {
  return (
    <div className="w-90 mx-auto mt-5 row">
      <div className="col-3">
        <Text text={DICTIONARY.customerService.toUpperCase()} fw='bold' fs='5 mb-3'/>
        {NAV_CONSTANTS_FOOTER_CUSTOMER_SERVICES.map((nav) =>(
          <div key={nav.title} className='mb-1'>
            <Link text={nav.title.toUpperCase()} href={nav.link} className='fs-7' />
          </div>
        ))}
      </div>
      <div className="col-3">
        <Text text={DICTIONARY.myAccount.toUpperCase()} fw='bold' fs='5 mb-3'/>
        {NAV_CONSTANTS_FOOTER_MY_ACCOUNT.map((nav) =>(
          <div key={nav.title} className='mb-1'>
            <Link text={nav.title.toUpperCase()} href={nav.link} className='fs-7' />
          </div>
        ))}
      </div>
      <div className="col-3">
        <Text text={DICTIONARY.customerService.toUpperCase()} fw='bold' fs='5 mb-3'/>
        {NAV_CONSTANTS_FOOTER_MEANS.map((nav) =>(
          <div key={nav.title} className='mb-1'>
            <Link text={nav.title.toUpperCase()} href={nav.link} className='fs-7' />
          </div>
        ))}
      </div>
      <div className="col-3">
        <Text text={DICTIONARY.newsLetter.toUpperCase()} fw='bold' fs='5 mb-3'/>
        <Text text={DICTIONARY.SignUpToBeTheFirstToReceiveOurNews} fs=' mb-3'/>
        <div className="w-85">
          <InputTextIcon placeholder={DICTIONARY.eMail.toUpperCase()} icon={ICONS_CONSTANTS.CHEVRON_RIGHT} classInput='w-100 py-2 ps-3 fw-bold' fs='5'/>
        </div>
      </div>
    </div>
  )
}
