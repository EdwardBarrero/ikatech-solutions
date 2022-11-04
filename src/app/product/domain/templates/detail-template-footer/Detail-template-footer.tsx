import FooterOrganismCompanyInfo from "../../organism/footer-organism-companyInfo/Footer-organism-companyInfo";
import FooterOrganismCompanyServices from "../../organism/footer-organism-companyServices/Footer-organism-companyServices";
import FooterOrganismCompanies from "../../organism/footer-organism-companies/Footer-organism-companies";
import "./detail-template-footer.scss";
export default function DetailTemplateFooter() {
  return (
    <div>
      <FooterOrganismCompanyInfo />
      <FooterOrganismCompanyServices />
      <FooterOrganismCompanies/>
    </div>
  )
}
