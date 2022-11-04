import './index.css'

import React, { useState } from 'react'
import { ButtonPrimarys } from '../../../../../Components/Buttons/Buttons';
import { InputText } from '../../../../../Components/TextInputs/TextInputs';
import { ListItem } from '../../components/ListItem';
import { FilteredList } from '../../components/FilteredList';

export const Carrers = () => {
  
    const[keyWord, setKeyWord] = useState('');
    const [careersData, setCareersData] = useState([
      {
        code: 'ABC-123', 
        title: 'Ingenieria en sistemas computacionales'
      },
      {
        code: 'ABC-456', 
        title: 'Ingenieria en electronica'
      },
      {
        code: 'ABC-789', 
        title: 'Ingenieria en industrial'
      },
      {
        code: 'ABC-012', 
        title: 'Licenciatura en gastronomia'
      },
      {
        code: 'ABC-012', 
        title: 'Ingenieria en mecatronica'
      },
      {
        code: 'ABC-012', 
        title: 'Ingenieria civil'
      },
      {
        code: 'ABC-012', 
        title: 'Licenciatura en electronica 2'
      },
    ])
  
    // function List () {
      
    //   const filterData=carrers.filter((item:any)=>{
  
    //     if (keyWord === ''){
    //       return item
    //     }else{
    //       return item.title.toLowerCase().includes(keyWord)
    //     }
  
    //   })
  
    //   return(
    //     <>
    //       {
    //         filterData.map((item:any)=>{
    //           return <ListItem isCareer code={item.code} title={item.title} /> 
    //         })
          
    //       }
    //     </>
    //   )
    // }
  
    const handleChange = (value:string) => {
      setKeyWord(value)
    }
    
    return(
      <>
        <div className="searchAddCareerContainer">
          <div className="searchCareerInput">
            <InputText isForSearch placeholder='Buscar carrera...' textInputOnChange={handleChange} labelText={''} />
          </div>
          <ButtonPrimarys isCancel={false} isborder={false} textButton={'Agregar carrera'} buttonOnClick={()=>console.log('hi')} />
        </div>

        
        <div className='careersListContainer'>
          <FilteredList keyWord={keyWord} data={careersData} isForCareers={true}/>
        </div>
      </>
    );

}
