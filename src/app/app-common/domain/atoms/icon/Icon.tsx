import "./icon.scss";
export default function Icon({icon='', fs='', iconColor='', onClick=()=>{}}) {
  return (
    <i onClick={()=>onClick()} className={`bi bi-${icon} fs-${fs} text-${iconColor}`}></i>
  )
}
