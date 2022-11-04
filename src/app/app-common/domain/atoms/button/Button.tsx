import "./button.scss";
export default function Button({text='', className='', onClick = ()=>{}}) {
  return (
    <button onClick={() => onClick()} type='button' className={className}>{text}</button>
  )
}
