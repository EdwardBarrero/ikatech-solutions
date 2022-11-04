import InputText from "../../atoms/inputText/InputText"
import Icon from "../../atoms/icon/Icon"

import "./inputText-icon.scss";
export default function InputTextIcon({id='', name='', placeholder='', defaultValue='', classInput='', icon='', fs='', iconColor='' }) {
  return (
    <div className="position-relative">
        <InputText id={id} name={name} placeholder={placeholder} defaultValue={defaultValue} classInput={classInput} />
        <Icon icon={`${icon} position-absolute top-0 end-0 tl-icon cursor-pointer`} fs={fs} iconColor={iconColor} />
    </div>
  )
}
