import { useState } from "react"

export const useField = ( type, characterLimit=0, setDefault ) => {
    
    const [value, setValue] = useState(setDefault? setDefault : '')
  
    const withLimit = (event) => {
      if(event.target.value.length <= characterLimit)
        setValue(event.target.value)
    }

    const withoutLimit = (event) => {
        setValue(event.target.value)
    }

    const onChange = characterLimit? withLimit : withoutLimit
    const reset = () => { setValue('') }

    const fieldAtributes = { type, value, onChange }
    return [ fieldAtributes , reset]
  }