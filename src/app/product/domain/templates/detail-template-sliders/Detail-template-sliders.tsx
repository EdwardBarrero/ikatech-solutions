import SlidersOrganismShoeCardOne from "../../organism/sliders-organism-shoeCardOne/Sliders-organism-shoeCardOne";
import SlidersOrganismShoeCardTwo from "../../organism/sliders-organism-shoeCardTwo/Sliders-organism-shoeCardTwo";
import Text from "../../../../app-common/domain/atoms/text/Text";
import { DICTIONARY } from "../../../../app-common/domain/constants/dictionary";
import { useAppSelector } from "../../../../hooks";
import "./detail-template-sliders.scss";
export default function DetailTemplateSliders() {
  const shoes = useAppSelector(state => state['products']['shoes']);
  return (
    <div className="my-5 mx-auto w-88">
        <Text text={DICTIONARY.completeYourLook.toUpperCase()} fs='5 bg-color-2' fw="bold ps-2" />
        <div className="d-flex overflow-auto w-100 mb-5">
          {shoes?.map((shoe)=>(
            <div key={shoe['nombre']} className="mx-4 mt-5">
            <SlidersOrganismShoeCardOne data={shoe} />
          </div>
          ))}
        </div>
        <Text text={DICTIONARY.recommendedProducts.toUpperCase()} fs='5 border-bottom' textColor="secondary" fw="bold ps-2" />
        <div className="d-flex overflow-auto w-100">
          {shoes?.map((shoe)=>(
          <div key={shoe['nombre']} className="mx-4 mt-5 mb-3">
            <SlidersOrganismShoeCardTwo data={shoe} />
          </div>
          ))}
        </div>
    </div>
  )
}
