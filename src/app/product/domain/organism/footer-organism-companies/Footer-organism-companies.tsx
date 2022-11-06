import Image from "../../../../app-common/domain/atoms/image/Image";
import "./footer-organism-companies.scss";
export default function FooterOrganismCompanies() {
  return (
    <div className="d-flex mt-5 border-top border-2 mb-5">
      <Image src={require('../../../../../assets/img/companies.JPG')} className='mx-auto mt-4 footer-companies-size' />
    </div>
  )
}
