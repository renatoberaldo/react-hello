export default function DateInput({
  labelDescription = 'Label Description',
  inputValue = '2022-07-30',
  onInputChange = null,
  id = 'id_do_input_date',
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
        type="date" 
        className="border p-1"
        value={inputValue} 
        onChange={handleInputChange}
      />
    </div>
  );
}