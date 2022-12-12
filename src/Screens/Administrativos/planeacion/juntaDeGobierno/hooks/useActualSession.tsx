import React, { useContext, useEffect, useState } from 'react'
import swal from 'sweetalert'
import { getActualSession } from '../../../../../Api/apiRoutes'
import axiosInstance from '../../../../../Api/axiosInstance'
import axiosInstanceJuntaGobierno from '../../../../../Api/axiosInstanceJuntaGobierno'
import { authContext } from '../../../../../Contexts/AuthProvider'

export const useActualSession = () => {
    const { auth }:any = useContext(authContext);

    const [actualSession, setActualSession] = useState<any>()
    const [isLoading, setIsLoading] = useState(false)
    const [serverError, setServerError] = useState<any>(null);
    const [reRender, setReRender] = useState(1)

    
    useEffect(() => {
        setIsLoading(true)

        const fetchData = async ()=>{
            try{
                const response = await axiosInstanceJuntaGobierno.get(getActualSession, {headers:{'x-token':auth.token}})
                const data = await response?.data
                console.log(data)

                //console.log('AQUI: ',response)
                setActualSession(data)
                setIsLoading(false)
            }catch(error){
                setServerError(error);
                setIsLoading(false);
            }  
        }

        fetchData()


    }, [])
    
  return {isLoading, actualSession, serverError}
}
