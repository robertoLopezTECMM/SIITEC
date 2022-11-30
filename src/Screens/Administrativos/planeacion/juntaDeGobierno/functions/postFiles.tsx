import React, { useContext, useEffect, useState } from 'react'
import swal from 'sweetalert'
import axiosInstance from '../../../../../Api/axiosInstance'
import axiosInstanceJuntaGobierno from '../../../../../Api/axiosInstanceJuntaGobierno'
import { authContext } from '../../../../../Contexts/AuthProvider'



export async function PostFiles(url:string, file:any, token:string) {
    console.log('si llega a la funcion')
    const formData = new FormData();
    formData.append("archivo", file)

    try{
        const response = await axiosInstanceJuntaGobierno.post(url, formData, {headers:{'x-token':token}})
        const data = await response?.data

        console.log('DATA: ', data.url) 

        return data.url
    }catch(error){
        console.log(error)
    }  
}