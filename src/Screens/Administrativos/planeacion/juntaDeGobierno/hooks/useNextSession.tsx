import React, { useContext, useEffect, useState } from 'react'
import swal from 'sweetalert'
import { getNextSessionUrl } from '../../../../../Api/apiRoutes'
import axiosInstance from '../../../../../Api/axiosInstance'
import axiosInstanceJuntaGobierno from '../../../../../Api/axiosInstanceJuntaGobierno'
import { authContext } from '../../../../../Contexts/AuthProvider'

export const useNextSession = (year:string, type:string) => {
    const { auth }:any = useContext(authContext);

    const [nextSesionName, setNextSesionName] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [serverError, setServerError] = useState<any>(null);
    const [reRender, setReRender] = useState(1)

    
    useEffect(() => {
        setIsLoading(true)

        const fetchData = async ()=>{
            try{
                const response = await axiosInstanceJuntaGobierno.get(getNextSessionUrl+type+'/'+year, {headers:{'x-token':auth.token}})
                const data = await response?.data


                //console.log('AQUI: ',response)
                setNextSesionName(response.data.nombre)
                setIsLoading(false)
            }catch(error){
                setServerError(error);
                setIsLoading(false);
            }  
        }

        fetchData()


    }, [type])
    

    const getNextSessionName = async () => {

 
        
        // .then((response)=>{
        //   setNextSesionName(response.data.nombre)
        //   console.log(response)
    

        // }).catch((err)=>{
        //   if(err.response.status===401){
            
        //     swal("Fallo!", "La contraseña o el usuario ingresado no son los correctos", "error")
        //   }else{
            
        //     swal("Fallo!", "Fallo la comunicacion", "error")
        //   }
    
        // })
        
      }
    
  return {isLoading, nextSesionName, serverError}
}
