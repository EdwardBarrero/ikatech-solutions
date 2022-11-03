import Image from "../../atoms/image/Image";
import Text from "../../atoms/text/Text";

import "./image-text.scss";
export default function ImageText({src='', imageClass='', text='', textColor='', fs='', fw=''}) {
  return (
    <div>
      <Image src={src} className={imageClass} />
      <Text text={text} textColor={textColor} fs={fs} fw={fw} />
    </div>
  )
}
