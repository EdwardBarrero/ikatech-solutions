import Text from "../../../../app-common/domain/atoms/text/Text";
import Image from "../../../../app-common/domain/atoms/image/Image";
import Button from "../../../../app-common/domain/atoms/button/Button";
import { DICTIONARY } from "../../../../app-common/domain/constants/dictionary";
import { addProduct } from "../../services/ProductServices";
import "./sliders-organism-shoeCardOne.scss";
export default function SlidersOrganismShoeCardOne({data={foto:'', nombre:'', precio:0}}) {
  return (
    <div className="d-flex flex-column shoeCardOne-size">
      <Image src={require(`../../../../../assets/img/${data?.foto}`)} className='slider-preview-size-1 mx-auto' />
      <Image src={require(`../../../../../assets/img/${data?.foto}`)} className='slider-preview-size-2' />
      <Text text={data?.nombre} fs='7 text-center' fw='bold mb-2'/>
      <Text text={"$ " + data?.precio.toString()} fs='5 text-center mt-2' textColor="color-1" fw="bold" />
      <Button onClick={()=>addProduct(data?.precio)} text={DICTIONARY.addToCar.toUpperCase()} className='scale px-5 py-2 fs-7 my-3 bg-color-1 text-white border-0' />
    </div>
  )
}
