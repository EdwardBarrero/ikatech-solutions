import IconLink from "../../../../app-common/domain/molecule/icon-link/Icon-link";
import Text from "../../../../app-common/domain/atoms/text/Text";
import { COMPANY_LINKS } from "../../../../app-common/domain/constants/company-links";
import { ICONS_CONSTANTS } from "../../../../app-common/domain/constants/icon-constants";
import "./footer-organism-companyInfo.scss";
export default function FooterOrganismCompanyInfo() {
  return (
    <div className="vh-25 bg-color-2 d-flex">
      <div className="d-flex flex-column mx-auto my-auto">
        <Text text="@HUSHPUPPIESCO" fs="1 mb-2" textColor="color-6" />
        <div className="mx-auto border-top border-secondary border-3 pt-2">
          <IconLink href={COMPANY_LINKS.FACEBOOK} icon={ICONS_CONSTANTS.FACEBOOK} fs='2 mx-2 ps-4 cursor-pointer' iconColor="color-6"/>
          <IconLink href={COMPANY_LINKS.INSTAGRAM} icon={ICONS_CONSTANTS.INSTAGRAM} fs='2 mx-2 pe-4 cursor-pointer' iconColor="color-6"/>
        </div>
      </div>
    </div>
  )
}
