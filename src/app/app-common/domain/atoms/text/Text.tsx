import "./text.scss";

export default function Text({text='', textColor='', fs='', fw=''}) {
  return (
    <p className={`cursor-default text-${textColor} fs-${fs} fw-${fw} m-0`}>{text}</p>
  )
}
