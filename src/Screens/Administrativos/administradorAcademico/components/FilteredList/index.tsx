import React from 'react'
import { ListItem } from '../ListItem';

interface filteredListProps{
    keyWord: string;
    data: any;
    isForCareers?: boolean;
    isForAssignatures?: boolean;
}

export function FilteredList ({keyWord, data, isForAssignatures=false, isForCareers=false}:filteredListProps) {
      
    const filterData=data.filter((item:any)=>{

      if (keyWord === ''){
        return item
      }else{
        return item.title.toLowerCase().includes(keyWord)
      }

    })

    return(
      <>
        {
          filterData.map((item:any)=>{
            return <ListItem isCareer={isForCareers} code={item.code} title={item.title} /> 
          })
        
        }
      </>
    )
  }
