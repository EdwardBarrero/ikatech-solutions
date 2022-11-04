import Image from "../../../../app-common/domain/atoms/image/Image";
import Text from "../../../../app-common/domain/atoms/text/Text";
import "./sliders-organism-shoeCardTwo.scss";
export default function SlidersOrganismShoeCardTwo({data={foto:'', nombre:'', precio:0}}) {
  return (
    <div className="d-flex flex-column shoeCardOne-size border-bottom border-dark pb-3">
      <Image src={require(`../../../../../assets/img/${data?.foto}`)} className='slider-preview-size-1 mx-auto' />
      <Image src={require(`../../../../../assets/img/${data?.foto}`)} className='slider-preview-size-2' />
      <Text text={data?.nombre} fs='7 text-center' fw='bold mb-2'/>
      <Text text={"$ " + data?.precio.toString()} fs='5 text-center mt-2' textColor="color-1" fw="bold" />
    </div>
  )
}
