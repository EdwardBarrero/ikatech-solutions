import { useEffect, useState } from "react";
import Button from "../../../../app-common/domain/atoms/button/Button";
import Icon from "../../../../app-common/domain/atoms/icon/Icon";
import Image from "../../../../app-common/domain/atoms/image/Image";
import Text from "../../../../app-common/domain/atoms/text/Text";
import { DICTIONARY } from "../../../../app-common/domain/constants/dictionary";
import { ICONS_CONSTANTS } from "../../../../app-common/domain/constants/icon-constants";
import { useAppSelector } from "../../../../hooks";
import { getAllProducts, getProduct, addProduct } from "../../services/ProductServices";

import "./item-organism-preview.scss";
export default function ItemOrganismPreview() {
  const previews  = ['a','b','c','d','e','f'];
  const shoe = useAppSelector(state => state['products']['shoe']);
  const [sizeSelected, setSizeSelected] = useState('');
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    getAllProducts();
    getProduct();
  }, []);
  
  function sizeSelectedHandle(size:string):void{
    setSizeSelected(size);
  }
  function addFavHandle():void{
    setFavorite(!favorite);
  }
  return (
    <>
    {shoe?.foto !== '' &&
    <div className="row w-100">
      <div className="mx-5 col-6">
        <Image src={require(`../../../../../assets/img/${shoe?.foto}`)} className='item-detail-preview-size ms-5 border-bottom border-dark' />
        <div className="ms-5 mt-3">
          <Image src={require(`../../../../../assets/img/${shoe?.foto}`)} className='items-detail-preview-size mx-2 border-dark cursor-pointer' />
        </div>
      </div>
      <div className="col-5">
        <Text text={shoe?.nombre.toUpperCase()} fs='4' textColor="secondary text-start m-0" />
        <Text text={"$ " + shoe?.precio.toString()} fs='4' textColor="color-1 text-start m-0" fw='bold' />
        <Text text={DICTIONARY.productCode + shoe?.referencia} fs='6' textColor="color-2 text-start m-0" />
        <Text text={DICTIONARY.color.toUpperCase()} fs='5' textColor="secondary text-start mt-4" fw="bold"/>
        <Image src={require(`../../../../../assets/img/${shoe?.foto}`)} className='items-detail-preview-size-2 border border-dark p-2 mt-2' />
        <Text text={DICTIONARY.size.toUpperCase()} fs='5' textColor="secondary text-start mt-4" fw="bold"/>
        <div className="row w-75">
          {shoe?.tallas?.map((size) => (
            <div onClick={()=> sizeSelectedHandle(size)} key={size} className='mx-1 my-2 col-2'>
              <Button text={size} className={sizeSelected === size ? 'button-sizes-active fs-4 fw-bold scale' : 'button-sizes fs-5 fw-bold scale'}/>
            </div>
          ))}
        </div>
        <div className="d-flex">
          <Text text={DICTIONARY.sizesGuide.toUpperCase()} fs='5' textColor="secondary text-start mt-4 border-4 border-bottom" fw="bold"/>
        </div>
        <div className="d-flex align-items-center mt-4">
          <Button onClick={()=>{addProduct(shoe?.precio)}} text={DICTIONARY.addToCar.toUpperCase()} className='text-white border border-0 bg-color-1 px-5 py-2 scale me-5' />
          <Icon onClick={()=>addFavHandle()} icon={ICONS_CONSTANTS.HEART_FILL} iconColor={favorite ? 'danger cursor-pointer transition' : 'color-2 cursor-pointer transition'} fs="2 ms-5"/>
        </div>
      </div>
    </div>}
    </>
  )
}
