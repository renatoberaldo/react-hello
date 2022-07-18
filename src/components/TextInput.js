export default function TextInput({
  labelDescription = 'Label descriptioin',
  inputValue = 'Input value',
  onInputChange = null,
  id = 'id_do_input_text',
  autoFocus = false,
}){

  function handleInputChange({ currentTarget }){
    if (onInputChange){
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }


  return(
    <div  className='flex flex-col my-4'>
      <label className='text-sm mb-2' htmlFor={id}>
        {labelDescription}
      </label>
      <input 
        autoFocus = {autoFocus}
        id={id} 
        type="text" 
        className="border p-1"
        value={inputValue} 
        onChange={handleInputChange}
      />
    </div>
  );
}