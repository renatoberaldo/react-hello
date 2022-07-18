export default function CheckboxInput({
  labelDescription = 'Checkbox Description',
  inputValue = 'Input Value',
  onCheckboxChange = null,
  id = 'id_do_input_checkbox',
  autoFocus = false,
}){

  function handleInputChange(){
    if (onCheckboxChange){
      
      onCheckboxChange();

    }
  }


  return(
    <div className="flex flex-row items-center space-x-2 my-4">
     
      <input 
        autoFocus = {autoFocus}
        id={id} 
        type="checkbox" 
        className="border p-1"
        value={inputValue} 
        onChange={handleInputChange}
      />
      <label className='text-sm mb-1' htmlFor={id}>
        {labelDescription}
      </label>
    </div>
  );
}