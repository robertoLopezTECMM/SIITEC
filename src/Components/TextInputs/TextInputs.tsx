import { useState } from 'react'
import './TextInputs.css'

interface textInputInterface{
  placeHolder:string;
  textInputOnChange: (value:string) => void;
}

export const TextInput= ({placeHolder, textInputOnChange}:textInputInterface) => {
  const [textInputValue, setTextinputValue] = useState('')
  return (
    <div className='inputWithButton'>
      <input  className='textInput' 
              placeholder={placeHolder}
              value={textInputValue}
              onChange={(e) => [setTextinputValue(e.target.value), textInputOnChange(e.currentTarget.value)]} />
    </div>
  )
}

interface textInputPasswordInterface{
    placeHolder:string;
    passwordOnchange: (value:string, value2:string) => void;
    passwordValue?: string;
    fieldId?:any;
    isForPassword?: boolean
}

export const PasswordTextInput= ({placeHolder, passwordOnchange, fieldId, isForPassword}:textInputPasswordInterface) => {
  const [hidePassword, setHidePassword] = useState(true)
  const [passWordValue, setPassWordValue] = useState('')
    return (
      <div className='inputWithButton'>
        <input

          type={!isForPassword
            ? '' 
            : hidePassword ? 'password' : ''
            }
          className='textInput'
          value={passWordValue}
          placeholder={placeHolder}
          onChange={(e) => [
                            setPassWordValue(e.target.value), 
                            passwordOnchange(e.currentTarget.value, fieldId)
                          ]
                    }
        />

        {isForPassword
          ? <button onClick={()=>setHidePassword(!hidePassword)}>
              <i className="material-icons">{hidePassword? 'visibility_off' : 'visibility'}</i>
            </button>
          
          : null
        } 

      </div>
    )
  }
  
{/* =================================================================================================================================== */}

{/* Interface InputText */}
interface inputTextInterface{
  textInputOnChange: (value:string) => void;
  labelText: string;
  placeholder?: string;
}

{/* Component InputText */}
export const InputText = ({labelText, placeholder, textInputOnChange}: inputTextInterface) => {
  const [textInputValue, setTextinputValue] = useState('')
  return(
        <div className='inputContainer'>
          <label>{labelText}</label>
          <input 
              className={"inputText"} 
              placeholder={placeholder} 
              value={textInputValue}
              onChange={(e) => [setTextinputValue(e.target.value), textInputOnChange(e.currentTarget.value)]} />
        </div>
    )
}

{/* Interface InputTextSearch */}
interface inputTextSearchInterface{
  placeholder?: string;
  textInputOnChange: (value:string) => void;
}

{/* Component InputTextSearch */}
export const InputTextSearch = ({placeholder, textInputOnChange}: inputTextSearchInterface) => {
  const [value, setValue] = useState('')
  return(
        <div className='inputContainer'>
          <input 
              onChange={(e) => [setValue(e.target.value), textInputOnChange(e.target.value)]}
              className={"inputText"} 
              placeholder={placeholder} 
              value={value}
              />
              <button>
                <i className="material-icons">{'search'}</i>
              </button>
        </div>
    )
}

  
{/* Interface InputTextShortNumber */}
interface inputTextShortNumberInterface{
  textInputOnChange: (value:string) => void;
  labelText: string;
  placeholder?: string;
  maxLenght?: number;
}

{/* Component InputTextShortNumber */}
export const InputTextShortNumber = ({labelText, placeholder, maxLenght=2,  textInputOnChange}: inputTextShortNumberInterface) => {
  const [textInputValue, setTextinputValue] = useState('')
  return(
    <div className='inputContainer'>
            <label>{labelText}</label>
            <input
                type='text'
                className={"numberText"} 
                placeholder={placeholder ? placeholder : ''}
                maxLength={maxLenght }
                style={{width:'80px'} } 
                value={textInputValue}
                onChange={(e) => [setTextinputValue(e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')), textInputOnChange(e.currentTarget.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'))]} />

        </div>
    )
  }
  
{/* Interface InputTextPassword */}
interface inputTextPassword{
  passwordOnchange: (value:string, value2:string) => void;
  labelText: string;
  placeholder: string;
  fieldId?: any;
}

{/* Component InputTextPassword */}
export const InputTextPassword = ({labelText, placeholder, fieldId, passwordOnchange}: inputTextPassword) => {
  const [hidePassword, setHidePassword] = useState(true)
  const [passWordValue, setPassWordValue] = useState('')
  return(
    <div className='inputContainer'>
                <label>{labelText}</label>
                <input 
                    className="inputText"
                    type={hidePassword ? 'password' : ''} 
                    placeholder={placeholder}
                    style={{width: "100%"}}  
                    value={passWordValue}
                    onChange={(e) => [
                        setPassWordValue(e.target.value), 
                        passwordOnchange(e.currentTarget.value, fieldId)
                      ]
                }/>
                 <button onClick={()=>setHidePassword(!hidePassword)}>
                    <i className="material-icons">{hidePassword ? 'visibility_off' : 'visibility'}</i>
                </button>
                
                
        </div>
    )
}