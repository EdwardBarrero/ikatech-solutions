import "./icon.scss";
export default function Icon({icon='', fs='', iconColor=''}) {
  return (
    <i className={`bi bi-${icon} fs-${fs} text-${iconColor}`}></i>
  )
}
