import DetailTemplateNav from "../domain/templates/detail-template-nav/Detail-template-nav";
import DetailTemplateItem from "../domain/templates/detail-template-item/Detail-template-item";
import DetailTemplateSliders from "../domain/templates/detail-template-sliders/Detail-template-sliders";
import DetailTemplateFooter from "../domain/templates/detail-template-footer/Detail-template-footer";

import "./feature-product-detail.scss";
export default function FeatureProductDetail() {
  return (
    <div>
        <DetailTemplateNav />
        <DetailTemplateItem />
        <DetailTemplateSliders />
        <DetailTemplateFooter />
    </div>
  )
}
