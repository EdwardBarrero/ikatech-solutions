import "./image.scss";

export default function Image({src='', className=''}) {
  return (
    <img src={src} className={className} alt='Image not found'/>
  )
}
