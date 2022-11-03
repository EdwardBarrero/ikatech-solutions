import "./link.scss";
export default function Link({href='', className='', text='', textColor='dark'}) {
  return (
    <a href={href} className={`text-decoration-none hover text-${textColor} ${className}`}>{text}</a>
  )
}
