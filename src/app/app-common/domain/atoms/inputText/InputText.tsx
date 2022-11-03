import "./inputText.scss";
export default function InputText({id='', name='', placeholder='', defaultValue='', classInput=''}) {
  if(defaultValue.length === 0){
    defaultValue = null
  };
    
  return (
    <input id={id} name={name} placeholder={placeholder} defaultValue={defaultValue} className={classInput} type="text" />
  )
}
