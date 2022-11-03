import InputText from "../../atoms/inputText/InputText"
import Icon from "../../atoms/icon/Icon"

export default function InputTextIcon({id='', name='', placeholder='', defaultValue='', classInput='', icon='', fs='', iconColor='' }) {
  return (
    <div className="position-relative">
        <InputText id={id} name={name} placeholder={placeholder} defaultValue={defaultValue} classInput={classInput} />
        <Icon icon={`${icon} position-absolute`} fs={fs} iconColor={iconColor} />
    </div>
  )
}
