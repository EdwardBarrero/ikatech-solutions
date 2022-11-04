import Icon from "../../atoms/icon/Icon";
import "./icon-link.scss";
export default function IconLink({icon='', iconColor='', fs='', onClick=()=>{}, href=''}) {
  return (
    <a href={href} target='_blank'>
        <Icon icon={icon} iconColor={iconColor} fs={fs} onClick={()=> onClick()} />
    </a>
  )
}
